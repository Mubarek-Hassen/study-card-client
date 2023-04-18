
function CreateCard() {
  return (
    <div>
      <h2>Create Card</h2>
      <form>
        <label htmlFor="front">Front: </label>
        <input type="text" />
        <br />
        <label htmlFor="front">Back: </label>
        <input type="textarea" />
      </form>
      </div>
  )
}

export default CreateCard