import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import "./App.scss"

import {
    createBrowserRouter,
    RouterProvider,
    Route, Link, Outlet
} from "react-router-dom";

const App = () => {

    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: 'register',
                    element: <Register />,
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default App;