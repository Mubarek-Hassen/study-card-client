import Login from "../components/user/Login";
import Register from "../components/user/Register";
import { useState } from "react";
function User() {
  const [isRegister, setIsRegister] = useState(false)
  const sign =()=>{
    setIsRegister(!isRegister)
  }
  return (
    <div>

      {!isRegister && <Register />}
      {isRegister && <Login />}
      <h5>Already have an account?</h5>
      <button onClick={sign}>Login</button>
    </div>
  )
}

export default User;