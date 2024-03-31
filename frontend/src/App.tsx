import "./App.css";
import Dashboard from "./components/home/dashboard";
import Nxtwatch from "./components/apps/nxtwatch/Nxtwatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/login/login";
import { useEffect, useState } from "react";
import api, { setTokenInHeader } from "./components/api/api";
import { postRefreshToken } from "./components/api/LoginService";
import { CircularProgress } from "@mui/material";
import SportsCalendar from "./components/apps/sportsCalendar/sportsCalendar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262626",
    },
  },
});


function App() {
  const [loading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setUpInterceptor();
    const refreshAccessToken = async () => {
      try {
        const resp = await postRefreshToken();
        const newToken = resp.data.token;
        setTokenInHeader(newToken);
        setIsLoggedIn(true);
      } catch (error) {
        console.log("Error when trying to refresh token", error);
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    }

    refreshAccessToken();
  }, [])

  const setUpInterceptor = () => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (originalRequest.url && originalRequest.url.includes('/refresh')) {
          return Promise.reject(error);
        }

        if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await postRefreshToken();
            const { token } = response.data;
            setTokenInHeader(token);
            return api(originalRequest);
          } catch (error) {
            setIsLoggedIn(false);
            console.error(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }


  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Dashboard /> : <Login onLoginSuccess={onLoginSuccess} />,
    },
    {
      path: "nxtwatch",
      element: isLoggedIn ? <Nxtwatch /> : <Login onLoginSuccess={onLoginSuccess} />,
    },
    {
      path: "sportscalendar",
      element: isLoggedIn ? <SportsCalendar /> : <Login onLoginSuccess={onLoginSuccess} />,
    }
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {loading ? <>
        <div style={{ marginTop: "35%" }}>
          <CircularProgress size={"6rem"} color="primary" />
        </div>
      </> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
}

export default App;
