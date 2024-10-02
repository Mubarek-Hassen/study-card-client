import { ActionFunctionArgs } from "react-router-dom";
// import { json } from "react-router-dom";

export async function authAction({request}: ActionFunctionArgs) {
  console.log(request)
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode")
  const data = await request.formData()
  const url = import.meta.env.BASE_URL
  console.log(mode);
  

  const enteredData = {
    email: data.get("email"),
    password: data.get("password"),
  }

  console.log(url)
  console.log(data);

  const res = await fetch(`${url}user/${mode}`,  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enteredData),
  })
  const resData = await res.json()

  console.log(res)
  console.log(resData);

}
