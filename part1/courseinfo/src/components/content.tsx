import React from "react";
import Part from "./part";

function Content({parts}): JSX.Element {
const [{ name: part1, exercises: exercises1 }, 
       { name: part2, exercises: exercises2 }, 
       { name: part3, exercises: exercises3 }] = parts;


  return(
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Part part={part3} exercise={exercises3} />
    </>
  );
}

export default Content
