import "./App.css";
import Header from "./components/header/Header";
import Dashboard from "./components/home/dashboard";
import Nxtwatch from "./components/apps/nxtwatch/Nxtwatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard searchQuery={searchQuery} />,
    },
    {
      path: "nxtwatch",
      element: <Nxtwatch />,
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
