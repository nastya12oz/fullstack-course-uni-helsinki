import React from "react"

function Total({parts}): JSX.Element {
  const [
    { exercises: exercises1 }, 
    { exercises: exercises2 }, 
    { exercises: exercises3 }] = parts;
  return(
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

export default Total