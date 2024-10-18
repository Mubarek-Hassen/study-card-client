import { ActionFunctionArgs, json } from "react-router-dom";
import { getAuthToken } from "../authHelpers";

export const cardLoader = async ({params}: ActionFunctionArgs)=>{
  const { cardId } = params
  const token = getAuthToken()
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}grokker/${cardId}`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  if(!response.ok){
    return json({message: "An error occured."}, {status: 500})
  } else {
    const data = await response.json()
    return data
  }
}