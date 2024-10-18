import { Box, Typography } from "@mui/material"
import { useRouteLoaderData } from "react-router-dom"

const GrokCard = () => {
  const card = useRouteLoaderData("card")
  console.log(card)

  return (
    <Box>
      <Typography>{card.front}</Typography>
      <Typography>{card.back}</Typography>
    </Box>
  )
}

export default GrokCard