import React from "react";

function Filter({searchTerm, onChange}): JSX.Element {
  return(
    <div>
    filter shown with <input value={searchTerm} onChange={onChange} />
  </div>

  )
}

export default Filter;
