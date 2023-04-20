import { useState } from "react"

function CreateCard() {
  const [card, setCard] = useState({
    front: "",
    back: "",
  });

  const inputChange = (event)=>{
    const { name, value } = event.target;
    setCard({ ...card, [name]: value })
    console.log(card);
  }

  return (
    <div>
      <h2>Create Card</h2>
      <form>
        <label htmlFor="front">Front: </label>
        <input type="text" name="front" value={ card.front } onChange={ inputChange }/>
        <br />
        <label htmlFor="back">Back: </label>
        <input type="textarea" name="back" value={ card.back } onChange={ inputChange }/>
      </form>
      </div>
  )
}

export default CreateCard