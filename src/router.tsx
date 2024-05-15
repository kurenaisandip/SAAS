import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import DashBoardLayout from './layouts/DashBoardLayout';
import ProductPage from './pages/ProductPage';
import AuthLayout from './layouts/AuthLayout';


 const router = createBrowserRouter(
   [
    {
        path: 'dashboard',
        element: <DashBoardLayout/>,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },

            {
                path:'product',
                element: <ProductPage/>,

            },
            
        ],
        
    },

    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
                 },
                 {
                     path: 'register',
                     element: <RegisterPage />,
                 },
        ],
    },

       
       
    ],
    );

    export default router;
