import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  const logout =()=>{
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/user")
  }
  return (
    <div className="green">
      <Link to="/"> Home </Link>
      <Link to="/new-card"> Create Card </Link>
      {!cookies.access_token ? <Link to="/user"> Login/Register </Link> : <button onClick={ logout }>Logout</button>}
    </div>
  )
}

export default Navbar