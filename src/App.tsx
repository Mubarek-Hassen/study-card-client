import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './components/RootLayout'
function App() {

  const router = createBrowserRouter([
    { path: "/", 
      element: <RootLayout />, 
      children: [
        {index: true, element: <Home />}
      ] 
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
