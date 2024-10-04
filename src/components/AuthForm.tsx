import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, Link, useActionData, useSearchParams } from "react-router-dom";

const AuthForm = () => {
const [searchParams] = useSearchParams()
const isLogin = searchParams.get("mode") === "login";
const errors= useActionData()
console.log(errors);
  return (
    <>
    <Box sx={{m: "3rem", height: "20rem"}}>
      <Typography variant="h4">{isLogin ? "Login":"Register"}</Typography>
      <Form method="post" style={{display: "flex", flexDirection: "column", maxWidth: "40rem", margin: "0 auto", gap: "1.5rem"}}>
        {!isLogin && <TextField name="name" label="Name" placeholder="name" error = {errors && Object.keys(errors).includes("name")}/>}
        <TextField label="Email" placeholder="Email" name="email" error = {errors && Object.keys(errors).includes("email")} />
        <TextField label="Password" placeholder="Password" name="password" type="password" error = {errors && Object.keys(errors).includes("password")} />
        <Button variant="contained" type="submit" sx={{bgcolor: "black", ":hover": {bgcolor: "green"} }}>Submit</Button>
      </Form>
    </Box>
        <Typography>OR</Typography>
        <Link to={`?mode=${isLogin ? "register" : "login"}`} >Create an account</Link>
    </>
  )
}

export default AuthForm