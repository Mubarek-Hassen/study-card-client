import { Box } from "@mui/material"
import AuthForm from "../components/AuthForm"
// import { useSearchParams } from "react-router-dom"


const Auth = () => {
  // const [searchParams] = useSearchParams()
  // const isLogin = searchParams.get("mode") === "login"
  return (
    <Box>
    <AuthForm />
    </Box>
  )
}

export default Auth