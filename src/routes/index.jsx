import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/Page";
import MainLayoutPage from "../layouts/MainLayout";
import HomePage from "../pages/Home/Page";
export const routes = createBrowserRouter([
  {
    element: <MainLayoutPage />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
