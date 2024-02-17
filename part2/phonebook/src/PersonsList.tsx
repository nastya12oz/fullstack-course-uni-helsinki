import React from "react";

function PersonsList({persons, searchTerm, onDelete}): JSX.Element {
  return(
    <div>
      {
            persons
            .filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((person, index) => 
              <li key={index} className="note">
                {person.name} {person.number}
                <button onClick={() => onDelete(person.id)}>delete</button>
                </li>
            )
      }
    </div>

  
  )
}

export default PersonsList;
