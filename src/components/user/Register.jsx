import { useState } from "react"

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })
  return (
    <div>
      <form>
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
          <input type="text" value={userData.password} onChange={(e)=> setUserData({ ...userData, password: e.target.value})} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register