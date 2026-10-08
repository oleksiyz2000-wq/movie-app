import { createBrowserRouter } from "react-router"

import RegistrationPage from './pages/register-page'
import App from "./App.tsx"

const router = createBrowserRouter([
  { path: "/", element: <App/>},
  { path: "/registration", element: <RegistrationPage/> },

])

export default router
