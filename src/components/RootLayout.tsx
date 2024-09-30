import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Container } from "@mui/material"

const RootLayout = () => {
  return (
    <Container>
    <Header />
    <Outlet />
    </Container>
  )
}

export default RootLayout