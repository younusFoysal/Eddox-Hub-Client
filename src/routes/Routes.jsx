import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Contact from "../pages/Contact.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";




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
              path: '/contact',
              element: <Contact/>
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
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

