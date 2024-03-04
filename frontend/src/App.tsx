import "./App.css";
import Dashboard from "./components/home/dashboard";
import Nxtwatch from "./components/apps/nxtwatch/Nxtwatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/login/login";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#262626",
    },
  },
});

const isLoggedIn = () => {
  return true;
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn() ? <Dashboard /> : <Login />,
    },
    {
      path: "nxtwatch",
      element: isLoggedIn() ? <Nxtwatch /> : <Login />,
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
