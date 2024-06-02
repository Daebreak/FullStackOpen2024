import { useState } from 'react'

const Button = ({onClick, text}) => <><button onClick={onClick}>{text}</button></>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))

  const handleSelectClick = () => setSelected(() => Math.floor(Math.random() * 8))
  const handleVoteClick = () => {
    const copy = [...votes]

    copy[selected]++ 

    setVotes(copy)
  }

  const mostVotes = votes.reduce((acc, cur) => Math.max(acc, cur))

  const listOfMostVotes = [...votes.keys()].filter(vote => votes[vote] === mostVotes)

  const randomMostvoted = listOfMostVotes[Math.floor(Math.random() * listOfMostVotes.length)]

  console.log(randomMostvoted)

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <Button onClick={handleVoteClick} text="vote" />
        <Button onClick={handleSelectClick} text="next anecdote" />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
      </div>
      <div>
        {anecdotes[randomMostvoted]}
      </div>
    </>
  )
}

export default App