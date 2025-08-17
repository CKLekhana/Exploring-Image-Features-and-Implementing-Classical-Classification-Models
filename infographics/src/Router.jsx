import { createBrowserRouter } from "react-router-dom"
import InfographicPage from "./InfographicPage"

let router = createBrowserRouter([
  {
    path: "/",
    element: <InfographicPage></InfographicPage>,
  }
])

export default router