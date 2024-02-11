import Header from "./header"
import Content from "./content"
import Total from './total'
import React from "react";


function Course({course}): JSX.Element {
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

  );
}

export default Course