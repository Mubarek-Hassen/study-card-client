import { ActionFunctionArgs } from "react-router-dom";
import { getAuthToken } from "../authHelpers";


export async function action({request, params}: ActionFunctionArgs){
  const method = request.method;
  //? TODO: ADD DYNAMIC ROUTE FOR CARD ID
  // const cardId = params.cardId
  const token = getAuthToken()
  const data = await request.formData()
  const enteredData = {
    front: data.get("front"),
    back: data.get("back"),
  }
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let url = `${baseUrl}grokker`;
  if(method === "POST"){
    url = `${baseUrl}/new`
  }
  if(method === "PUT"){
    url = `${baseUrl}/`
  }



}