import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        {
            index: true,
            Component: Home,
            loader: ()=> fetch('/appDetails.json')
        },
        {
            path: '/apps',
            element: <Apps></Apps>,
            loader: ()=> fetch('/appDetails.json'),
        },
        {
            path: '/installation',
            element: <Installation></Installation>,
        },
        {
            path: "/app/:id",
            element: <AppDetails/>,
            loader: ()=> fetch('/appDetails.json')
        },
        {
            path: "/notfound",
            element: <NotFound/>
        }
    ]
  },
]);

export default router;
