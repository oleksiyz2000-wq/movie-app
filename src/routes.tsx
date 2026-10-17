import { createBrowserRouter } from "react-router"

import App from "./App.tsx"
import LoginPage from './pages/LoginPage'
import RegistrationPage from "./pages/RegistrationPage"
import FilmDetailsPage from "./pages/FillmDetailsPage/FilmDetailsPage.tsx"

const router = createBrowserRouter([
  { path: "/", element: <App/>},
  { path: "/login", element: <LoginPage/> },
  { path: "/registration", element: <RegistrationPage/>},
  { path: "/film-details", element: <FilmDetailsPage/>}
])

export default router
