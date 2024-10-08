import { ActionFunctionArgs, json, redirect } from "react-router-dom";
import { setAuthToken } from "../authHelpers";

export async function authAction({request}: ActionFunctionArgs) {
  console.log(request)
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode")
  const url = import.meta.env.VITE_BASE_URL
  console.log(mode);
  console.log(url)
  
  const data = await request.formData()

  const enteredData = {
    email: data.get("email"),
    password: data.get("password"),
  }
  if(mode === "register"){ 
    enteredData.name = data.get("name")
  }
  console.log(data);
  console.log(enteredData);


  const res = await fetch(`${url}user/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enteredData),
  })
  console.log(res)

  const resData = await res.json()
  console.log(resData);
  if(!resData.token){
    return resData
  }
  if(res.status === 401){
    throw json({message: resData}, {status: 401})
  }
  const token = resData.token;
  setAuthToken(token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1)
  localStorage.setItem("expiration", expiration.toISOString())
  if(token){
    return redirect("/grokker")
  }
  return redirect(`/auth?mode=${mode}`)
}
