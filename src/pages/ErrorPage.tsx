import { useRouteError } from "react-router-dom"
import RootLayout from "../components/RootLayout"
import { Typography } from "@mui/material"


const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <RootLayout>
      <Typography variant="h1">OOPS!</Typography>
      <Typography variant="h3">An Error Has Occured!</Typography>
      
    </RootLayout>
  )
}

export default ErrorPage