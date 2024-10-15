import { ActionFunctionArgs } from "react-router-dom";
import { getAuthToken } from "../authHelpers";



export const cardLoader = async ({params}: ActionFunctionArgs)=>{
  const { cardId } = params
  const token = getAuthToken()
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/grokker/${cardId}`)
}