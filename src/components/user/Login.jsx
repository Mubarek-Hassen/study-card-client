import axios from "axios"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const [_,setCookies] = useCookies(["access_token"])
  const onLogin = async (event)=>{
    event.preventDefault()

    try {
      const response = axios.post("http://localhost:8080/user/login", userData)
      setCookies("access_token", response.data.token)
      window.localStorage.setItem("userID", response.data.userId)
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form>
        <h2> Login </h2>
        <div>
          <label htmlFor="email"> Email: </label>
          <input type="text" value={userData.email} onChange={(e)=> setUserData({ ...userData, email: e.target.value})} />
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input type="password" value={userData.password} onChange={(e)=> setUserData({ ...userData, password: e.target.value})} />
        </div>
        <button type="submit"> Login </button>
      </form>
    </div>
  )
}

export default Login