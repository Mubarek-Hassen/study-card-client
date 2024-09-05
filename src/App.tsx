import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"

const App = () =>  {

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, children: [
        { index: true, element: <Home /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App