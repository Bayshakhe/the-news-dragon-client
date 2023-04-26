import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import NewsLayout from "../layouts/newsLayout/NewsLayout";
import News from "../pages/news/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
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
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;