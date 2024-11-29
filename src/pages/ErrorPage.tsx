import { useRouteError } from "react-router-dom"
import RootLayout from "../components/RootLayout"
import { Typography } from "@mui/material"


const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  let status = error.status
  console.log(status);
  let message = error.data.message
  console.log(message);

  return (
    <RootLayout>
      <Typography variant="h1">OOPS!</Typography>
      <Typography variant="h3">error status: {status && status}</Typography>
      <Typography variant="h3">error message: {message && message}</Typography>
      
    </RootLayout>
  )
}

export default ErrorPage