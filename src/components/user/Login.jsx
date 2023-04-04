import { useState } from "react"
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
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