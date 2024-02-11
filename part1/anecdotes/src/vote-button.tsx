import React from "react";

function VoteButton({ onClick }): JSX.Element {
  return <button onClick={onClick}>vote</button>;
}

export default VoteButton