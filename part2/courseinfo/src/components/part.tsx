import React from "react";

function Part({part, exercise}): JSX.Element {
  return(
    <p>
      {part} {exercise}
    </p>
  );
}

export default Part
