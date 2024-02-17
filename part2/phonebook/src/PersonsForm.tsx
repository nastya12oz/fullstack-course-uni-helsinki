import React from "react";

function PersonsForm({addPerson, newName, newNumber, setNewName, setNewNumber}): JSX.Element {

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return(
    <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

  );
}

export default PersonsForm;
