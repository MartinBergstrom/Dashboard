import './App.css'
import Header from './components/header/Header';
import Dashboard from './components/home/dashboard';
import Watches from './components/watches/Watches';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "watches",
            element: <Watches />
        },
    ]);

    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}

export default App
