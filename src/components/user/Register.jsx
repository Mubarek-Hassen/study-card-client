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
          <input type="text" onChange={(e)=> setUserData({ ...userData, name: e.target.value})} />
        </div>
        <div>
          <label htmlFor="email"> Email: </label>
          <input type="text" onChange={(e)=> setUserData({ ...userData, email: e.target.value})} />
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input type="text" onChange={(e)=> setUserData({ ...userData, password: e.target.value})} />
        </div>
      </form>
    </div>
  )
}

export default Register