import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const onRegister = async (event)=>{
    event.preventDefault()
    try {
      await axios.post("http://localhost:8080/user/register", userData)
      alert("User Registered!")
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form onSubmit={onRegister}>
        <h2> Register </h2>
        <div>
          <label htmlFor="name"> Name: </label>
          <input type="text" value={userData.name} onChange={(e)=> setUserData({ ...userData, name: e.target.value})} />
        </div>
        <div>
          <label htmlFor="email"> Email: </label>
          <input type="text" value={userData.email} onChange={(e)=> setUserData({ ...userData, email: e.target.value})} />
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input type="password" value={userData.password} onChange={(e)=> setUserData({ ...userData, password: e.target.value})} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register