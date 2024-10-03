import { Box, Button,  Input, Typography } from "@mui/material";
import { Form, Link, useActionData, useSearchParams } from "react-router-dom";

const AuthForm = () => {
const [searchParams] = useSearchParams()
const isLogin = searchParams.get("mode") === "login";
const errors= useActionData()
console.log(errors);

  return (
    <Box>
      <Typography variant="h4">{isLogin ? "Login":"Register"}</Typography>
      <Form method="post" style={{display: "flex", flexDirection: "column", maxWidth: "40rem", margin: "0 auto", gap: "1.5rem"}}>
        <Input placeholder="email" name="email" />
        {!isLogin && <Input name="name" placeholder="name" />}
        <Input placeholder="password" name="password" type="password" />
        <Button variant="contained" type="submit" sx={{bgcolor: "black", ":hover": {bgcolor: "green"} }}>Submit</Button>
        <Typography>OR</Typography>
        <Link to={`?mode=${isLogin ? "register" : "login"}`} >Create an account</Link>
      </Form>
    </Box>
  )
}

export default AuthForm