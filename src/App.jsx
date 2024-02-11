import { useState } from 'react'
import Statistics from './statistics';
import FeedbackButton from './feedback-button'


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <FeedbackButton name='good' onClick={() => setGood((count) => count + 1)} />
        <FeedbackButton name='neutral' onClick={() => setNeutral((count) => count + 1)} />
        <FeedbackButton name='bad' onClick={() => setBad((count) => count + 1)} />
      </div>
      <h2>statistics</h2>
      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  )
}

export default App
