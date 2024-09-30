import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, useSearchParams } from "react-router-dom";

const AuthForm = () => {
const [searchParams] = useSearchParams()
const mode = searchParams.get("mode");
  return (
    <Box>
      <Typography variant="h4">{mode==="login" ? "Login":"Register"}</Typography>
      <Form style={{display: "flex", flexDirection: "column", maxWidth: "40rem", margin: "0 auto", gap: "1.5rem"}}>
        <TextField label="Email"  name="email" sx={{color: "violet"}}/>
        <TextField label="password" type="password"  name="email" sx={{color: "violet"}}/>
        <Button variant="contained" sx={{bgcolor: "black", ":hover": {bgcolor: "green"} }}>Submit</Button>
      </Form>
    </Box>
  )
}

export default AuthForm