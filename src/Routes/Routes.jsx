import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";


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
        },
        {
            path: '/apps',
            element: <Apps></Apps>,
        },
        {
            path: '/installation',
            element: <Installation></Installation>,
        }
    ]
  },
]);

export default router;
