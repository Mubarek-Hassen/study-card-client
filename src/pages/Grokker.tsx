import { Box, Button, Card, CardContent, Grid2, Typography } from "@mui/material"
import { Link, useRouteLoaderData, } from "react-router-dom"



interface Card {
  _id: string,
  front: string,
  back: string
}


const Grokker = () => {
  const cards = useRouteLoaderData("cards") as [Card]
  console.log(cards)
  return (
    <Box sx={{ display: "grid", justifyContent: "center",  }}>
      {cards.length < 1 && <Typography>There are no cards.</Typography>}
      <Link to={`new-card`} style={{width: "max-content", margin: "auto" }}>
        <Button variant="contained">Add A Card</Button>
      </Link>

      <Grid2 container spacing={2} sx={{m:2, border: "black solid 1px", width: "95vw"}}>

        {cards && cards.map((card: Card) => <Grid2 key={card._id} size={{xs:12 , sm: 6 }} sx={{p: 2}} >
        <Card variant="outlined" >
          <Link to={`${card._id}`}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{card.front}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{card.back}</Typography>
          </CardContent>
          </Link>
        </Card>
        </Grid2>
        )}
      
      </Grid2>
    </Box>
  )
}

export default Grokker