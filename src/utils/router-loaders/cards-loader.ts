import { json } from "react-router-dom";
import { getAuthToken } from "../authHelpers";


export default async function cardsLoader (){
  const token = getAuthToken();
  const url = import.meta.env.VITE_BASE_URL
  const response = await fetch(`${url}grokker`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  if(!response.ok){
    throw json({message: response.statusText}, {status: response.status})
  } else {
    const res = await response.json()
    return res
  }
}