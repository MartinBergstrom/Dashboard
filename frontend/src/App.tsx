import "./App.css";
import Dashboard from "./components/home/dashboard";
import Nxtwatch from "./components/apps/nxtwatch/Nxtwatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/login/login";
import { useEffect, useState } from "react";
import { setTokenInHeader } from "./components/api/axiosConfig";
import { jwtDecode } from "jwt-decode"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262626",
    },
  },
});


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Use effect App()")
    setTokenInHeader();
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const expTime = decoded.exp;
      let currentDate = new Date();
      if (expTime && expTime * 1000 < currentDate.getTime()) {
        console.log("Token expired");
        setIsLoggedIn(false);
      } else {
        console.log("Token is still valid");
        setIsLoggedIn(true);
      }
    }
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
