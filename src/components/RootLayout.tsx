import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Container } from "@mui/material"
// import { ReactNode } from "react"

const RootLayout = (props) => {
  return (
    <Container>
    <Header />
    <Outlet />
    {props.children}
    </Container>
  )
}

export default RootLayout