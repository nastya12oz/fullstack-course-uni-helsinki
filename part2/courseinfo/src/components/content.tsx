import React from "react";
import Part from "./part";

function Content({ parts }): JSX.Element {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} exercise={part.exercises} />
      ))}
    </>
  );
}

export default Content;
