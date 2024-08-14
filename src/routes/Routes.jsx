import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import ContactUs from "../components/Home/ContactUS.jsx";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: <ContactUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },

        ],
    },


])

