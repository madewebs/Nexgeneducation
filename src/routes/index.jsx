import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/Page";
import MainLayoutPage from "../layouts/MainLayout";
import HomePage from "../pages/Home/Page";
import CourseTemplatePage from "../pages/CourseTemplate/Page";
import ContactPage from "../pages/Contact/Page";
import AboutPage from "../pages/About/Page";
export const routes = createBrowserRouter([
  {
    element: <MainLayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/course/:courseName",
        element: <CourseTemplatePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
