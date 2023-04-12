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
      {isRegister && <div><Login />
      </div>}
    {!isRegister ? <h5>Already have an account?</h5> : <h5>Create an account?</h5>}
    <button onClick={sign}>{isRegister ? "Register" : "Login"}</button>
    </div>
  )
}

export default User;