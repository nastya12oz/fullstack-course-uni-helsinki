import React from "react";

function Filter({searchTerm, onChange}): JSX.Element {
  return(
    <div>
    find countries <input value={searchTerm} onChange={onChange} />
  </div>

  )
}

export default Filter;
