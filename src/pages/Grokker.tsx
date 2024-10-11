import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const Grokker = () => {
  return (
    <Box>
      <Typography>There are no cards.</Typography>
      <Link to={`new-card`}>
      <Button variant="contained">Add A Card</Button>
      </Link>
    </Box>
  )
}

export default Grokker