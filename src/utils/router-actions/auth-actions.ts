import { ActionFunctionArgs } from "react-router-dom";
// import { json } from "react-router-dom";

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


}
