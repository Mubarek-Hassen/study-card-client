import { Box, List, ListItem } from "@mui/material"
import AuthForm from "../components/AuthForm"
import { useActionData } from "react-router-dom"
// import { useSearchParams } from "react-router-dom"


const Auth = () => {
  const errors = useActionData()
  const errorList = errors && (
    <List>
      {Object.values(errors).map(error => <ListItem color="error" sx={{color: "red"}}  key={error}>{error}</ListItem>)}
    </List> )
  return (
    <Box>
      {errorList}
    <AuthForm />
    </Box>
  )
}

export default Auth