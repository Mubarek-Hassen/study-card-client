import { ActionFunctionArgs, redirect } from "react-router-dom";
import { getAuthToken } from "../authHelpers";


export async function manipulateCard({request, params}: ActionFunctionArgs){
  const method = request.method;
  const cardId = params.cardId
  const token = getAuthToken()
  const data = await request.formData()
  const enteredData = {
    front: data.get("front"),
    back: data.get("back"),
  }
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let url = `${baseUrl}`;
  if(method === "POST"){
    url = `${baseUrl}grokker/new-card`
  }
  if(method === "PUT"){
    url = `${baseUrl}grokker/${cardId}`
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(enteredData),
  })

  const resData = await response.json()
  if(response.status === 401){
    return redirect("."),resData
  }
  return redirect("/grokker")
}