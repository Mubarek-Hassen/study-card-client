import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="green">
      <Link to="/"> Home </Link>
      <Link to="/create-card"> Create Card </Link>
      <Link to="/user"> Login/Register </Link>
    </div>
  )
}

export default Navbar