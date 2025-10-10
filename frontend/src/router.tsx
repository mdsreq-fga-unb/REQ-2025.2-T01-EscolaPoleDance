import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import HomePage from './pages/HomePage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/404',
    element: <NotFoundPage />
  }
])