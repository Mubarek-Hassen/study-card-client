import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const Home = () => {
  
  return (
    <Box>
      <Typography variant="h2">Welcome To Grokker!</Typography>
      <Typography variant="h3">Where you get help to Grokk your test!</Typography>
      <Link to="auth?mode=login">
        <Button variant="contained" sx={{bgcolor: "black", my: 2}}>Login</Button>
      </Link>
    </Box>
  )
}

export default Home