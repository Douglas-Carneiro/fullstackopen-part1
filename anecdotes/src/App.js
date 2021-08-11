import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  const handleNextClick = () => {
    let randomNumber = Math.floor(Math.random() * 6)
    // console.log('Random number: ',randomNumber)
    setSelected(randomNumber)
  }

  const handleVoteClick = () => {
    const copy = { ...points }
    copy[selected] += 1 
    setPoints(copy)
  }

  function hasMostVotes() {
    let max = points[0]
    let maxIndex = 0
    
    for (let i = 1; i < 7; i++) {
      var value = points[i]
      if (value > max) {
        max = value
        maxIndex = i
      }
    }

    return maxIndex;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} points</p>
      <br></br>
      <Button handleClick={handleVoteClick} text='vote' />
      <Button handleClick={handleNextClick} text='next anecdote' />

      <br></br>
      <h1>Anecdote with most votes</h1>
      {anecdotes[hasMostVotes()]}
    </div>
  )
}

export default App