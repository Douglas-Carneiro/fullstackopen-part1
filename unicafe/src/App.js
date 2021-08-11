import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <>
      <td>{text}</td>
      <td> {value}%</td>
      </>
    )
  }
  return(
    <>
      <td>{text}</td>
      <td> {value}</td>
      </>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if ((good === 0) && (neutral === 0) && (bad === 0)){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={good} />
          </tr>
          <tr>
          <StatisticLine text='neutral' value={neutral} />
          </tr>
          <tr>
            <StatisticLine text='bad' value={bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={all} />
          </tr>
          <tr>
            <StatisticLine text='average' value={(good+(bad*(-1)))/(all)} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={(good/(all))*100} />
          </tr>
        </tbody>
        
      </table>
      
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Event handlers
  const handleGoodFeedback = () => {
    setGood(good + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' handleClick={handleGoodFeedback}/>
      <Button text='neutral' handleClick={handleNeutralFeedback}/>
      <Button text='bad' handleClick={handleBadFeedback}/>

      <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad} />
    </div>
  )
}

export default App