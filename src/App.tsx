import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { authAction } from "./utils/router-actions/auth-actions.ts"
import ErrorPage from "./pages/ErrorPage.tsx"
import Grokker from "./pages/Grokker.tsx"
import cardsLoader from "./utils/router-loaders/cards-loader.ts"
import { NewCard } from "./pages/NewCard.tsx"
import GrokCard from "./pages/GrokCard.tsx"
import { manipulateCard } from "./utils/router-actions/manipulate-card-action.ts"
import { cardLoader } from "./utils/router-loaders/card-loader.ts"

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
          id: "cards",
          children: [
            {
              index: true,
              element: <Grokker />,
            },{
              path: "new-card",
              element: <NewCard />,
              action: manipulateCard,
            },{
              path: ":cardId",
              id: "card",
              loader: cardLoader,
              children: [{
                index: true,
                element: <GrokCard />,
                
              }]
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