import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { authAction } from "./utils/router-actions/auth-actions.ts"
import ErrorPage from "./pages/ErrorPage.tsx"
import Grokker from "./pages/Grokker.tsx"
import cardsLoader from "./utils/router-loaders/cards-loader.tsx"

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
        },{
          path: "grokker",
          loader: cardsLoader,
          children: [
            {
              index: true,
              element: <Grokker />,
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App