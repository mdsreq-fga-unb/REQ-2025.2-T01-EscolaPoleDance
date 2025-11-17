import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AbaoutPage/AboutPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
]);

