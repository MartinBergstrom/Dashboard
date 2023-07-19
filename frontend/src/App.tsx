import "./App.css";
import Header from "./components/header/Header";
import Dashboard from "./components/home/dashboard";
import Watches from "./components/apps/watches/Watches";
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
      path: "watches",
      element: <Watches />,
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header
        searchQuery={searchQuery}
        onSearchQueryChange={handleSearchQueryChange}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
