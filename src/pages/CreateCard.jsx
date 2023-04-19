import { useState } from "react"

function CreateCard() {
  const [card, setCard] = useState({
    front: "",
    back: "",
  });

  const inputChange = (event)=>{
    
    // setCard({ event.target.name: event.target.value })
  }
  return (
    <div>
      <h2>Create Card</h2>
      <form>
        <label htmlFor="front" name="front" >Front: </label>
        <input type="text" />
        <br />
        <label htmlFor="back" name="back" >Back: </label>
        <input type="textarea" />
      </form>
      </div>
  )
}

export default CreateCard