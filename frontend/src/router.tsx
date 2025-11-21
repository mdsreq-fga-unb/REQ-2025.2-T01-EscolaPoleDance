import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import { createBrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'
import HomePage from './pages/HomePage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import LoginPage from './pages/LoginPage.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/signup',
    element: < SignupPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: 'dashboard'
  },
])
