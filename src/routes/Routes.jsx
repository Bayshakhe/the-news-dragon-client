import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/category/Category";
import NewsLayout from "../layouts/newsLayout/NewsLayout";
import News from "../pages/news/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Terms from "../pages/shared/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/terms',
                element: <Terms></Terms>,
            },
            {
                path: '/about',
                element: <div>About</div>,
            },
            {
                path: '/career',
                element: <div>Career</div>,
            },
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children:[
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-bayshakhe.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-bayshakhe.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;