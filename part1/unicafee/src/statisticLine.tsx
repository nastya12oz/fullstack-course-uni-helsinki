import React from "react"

function StatisticLine({text, value}): JSX.Element{
  return(
    <tr>
      <td>
      {text} 
      </td>
      <td>
      {value}
      </td>
    </tr>
  )
}

export default StatisticLine
