import { Box, Button, Input,  Typography } from "@mui/material";
import { Form, useActionData, useSearchParams } from "react-router-dom";

const AuthForm = () => {
const [searchParams] = useSearchParams()
const mode = searchParams.get("mode");
const errors= useActionData()
console.log(errors);

  return (
    <Box>
      <Typography variant="h4">{mode==="login" ? "Login":"Register"}</Typography>
      <Form style={{display: "flex", flexDirection: "column", maxWidth: "40rem", margin: "0 auto", gap: "1.5rem"}}>
        {/* <TextField label="Email"  name="email" sx={{color: "violet"}}/>
        <TextField label="password" type="password"  name="email" sx={{color: "violet"}}/> */}
        <Input placeholder="email" name="email" />
        <Input placeholder="password" name="password" type="password" />
        <Button variant="contained" type="submit" sx={{bgcolor: "black", ":hover": {bgcolor: "green"} }}>Submit</Button>
      </Form>
    </Box>
  )
}

export default AuthForm