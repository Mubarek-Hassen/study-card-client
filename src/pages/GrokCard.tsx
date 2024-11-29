import { Box, Typography } from "@mui/material"
import { useRouteLoaderData } from "react-router-dom"

interface Card {
  front: string;
  back: string;
  _id: string
}

const GrokCard = () => {
  const card = useRouteLoaderData("card") as Card;
  console.log(card)

  return (
    <Box>
      <Typography variant="h4">Question - {card.front}</Typography>
      <Typography variant="h5">Answer - {card.back}</Typography>
    </Box>
  )
}
export default GrokCard