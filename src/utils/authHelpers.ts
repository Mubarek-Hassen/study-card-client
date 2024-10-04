import { redirect } from "react-router-dom";

export const setAuthToken =(string: string) =>{
  localStorage.setItem("token", string)
}

// export const getAuthToken =()=>{
//   const token = localStorage.getItem("token");
//   if(!token){
//     return null;
//   }
// }