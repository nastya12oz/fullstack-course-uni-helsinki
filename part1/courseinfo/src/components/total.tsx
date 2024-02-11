import React from "react"

function Total({parts}): JSX.Element {

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return(
    <h3>total of {totalExercises} exercises</h3>
  )
}

export default Total