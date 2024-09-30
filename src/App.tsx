import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Auth from "./pages/Auth"

const App = () =>  {

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, 
      children: [
        { index: true, element: <Home /> },
        {
          path: "auth",
          element: <Auth />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App