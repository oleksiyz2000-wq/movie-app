import { createBrowserRouter } from "react-router"

import LoginPage from './pages/LoginPage'
import RegistrationPage from "./pages/RegistrationPage"
import App from "./App.tsx"

const router = createBrowserRouter([
  { path: "/", element: <App/>},
  { path: "/login", element: <LoginPage/> },
  { path: "/registration", element: <RegistrationPage/>}
])

export default router
