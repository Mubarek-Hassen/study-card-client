import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { authAction } from "./utils/router-actions/auth-actions.ts"
import ErrorPage from "./pages/ErrorPage.tsx"

const App = () =>  {

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, 
      errorElement: <ErrorPage /> ,
      children: [
        { index: true, element: <Home /> },
        {
          path: "auth",
          element: <Auth />,
          action: authAction
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App