import React from "react";

function AnecdoteLine({title, selectedAnecdote}): JSX.Element {
  return(
    <>
      <h2>{title}</h2>
      <p>
        {selectedAnecdote}
      </p>
    </>
  );
}

export default AnecdoteLine
