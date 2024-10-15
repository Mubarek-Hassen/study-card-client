import { ActionFunctionArgs, redirect } from "react-router-dom";
import { getAuthToken } from "../authHelpers";


export async function action({request, params}: ActionFunctionArgs){
  const method = request.method;
  const cardId = params.cardId
  const token = getAuthToken()
  const data = await request.formData()
  const enteredData = {
    front: data.get("front"),
    back: data.get("back"),
  }
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let url = `${baseUrl}grokker`;
  if(method === "POST"){
    url = `${baseUrl}/new-card`
  }
  if(method === "PUT"){
    url = `${baseUrl}/${cardId}`
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