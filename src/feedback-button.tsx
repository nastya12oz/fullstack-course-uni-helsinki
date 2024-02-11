import React from "react"

function FeedbackButton({name, onClick}): JSX.Element {
  return(
    <button onClick={onClick}>
    {name}
  </button>
  )
}

export default FeedbackButton