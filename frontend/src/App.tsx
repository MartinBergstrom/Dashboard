import "./App.css";
import Dashboard from "./components/home/dashboard";
import Nxtwatch from "./components/apps/nxtwatch/Nxtwatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/login/login";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/globalAuthContext";
import { setTokenInHeader } from "./components/api/api";
import { postRefreshToken } from "./components/api/LoginService";
import { CircularProgress } from "@mui/material";

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
  const [auth, setAuth] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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
  ]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {loading ? <>
          <div style={{ marginTop: "35%"}}>
          <CircularProgress size={"6rem"} color="primary" />
          </div>
        </> : <RouterProvider router={router} />}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
