import React from "react";
import StatisticLine from "./statisticLine";

const calculateAverage = (good, neutral, bad) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback ? ((good * 1) + (neutral * 0) + (bad * -1)) / totalFeedback : 0;
  return averageScore
};

const calculatePositivePercentage = (good, neutral, bad) => {
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;
  return positivePercentage + '%'; 
};


function Statistics({good, neutral, bad}): JSX.Element {
  const average = calculateAverage(good, neutral, bad);
  const positivePercentage = calculatePositivePercentage(good, neutral, bad);

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="all" value={good + neutral + bad} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positivePercentage} />
      </tbody>
    </table>
  );
};


export default Statistics
