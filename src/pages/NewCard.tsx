import { Box, Button, TextField } from "@mui/material"
import { Form } from "react-router-dom"

export const NewCard = () => {
  return (
    <Form method="post">
      <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", gap: "2rem", m: 4}}>
      <TextField name="front" label="Front of Card" />
      <TextField name="back" label="Back of Card" />
      </Box>
      <Button type="submit" variant="contained">Save Card</Button>

    </Form>
  )
}
