import { Box, Button, Typography } from "@mui/material"
import { Link, useRouteLoaderData,  } from "react-router-dom"


const Grokker = () => {
  const cards = useRouteLoaderData("cards")
  console.log(cards)
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