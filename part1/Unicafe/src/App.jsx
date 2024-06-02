import { useState } from 'react'

const Header = () => <div><h1>Give Feedback!</h1></div>

const Button = ({handleClick, text}) => <><button onClick = {handleClick}>{text}</button></>

const Statistics = (votes) => {
  console.log(votes)
  if (votes.good == 0 && votes.neutral == 0 && votes.bad == 0) {
    
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <h1>Statistics</h1>
        <VoteCount text = "good" vote = {votes.good}/>
        <VoteCount text = "neutral" vote = {votes.neutral}/>
        <VoteCount text = "bad" vote = {votes.bad}/>
        <Total {...votes}/>
        <Average {...votes}/>
        <Positive {...votes}/>
        </table>
    </div>
  )
}

const VoteCount = ({text, vote}) => (
<div>
  <tr>
    <td>{text}:</td> 
    <td>{vote}</td>
  </tr>
</div>
)

const Total = ({good, neutral, bad}) => (
  <div>
    <tr>
      <td>
        Total:
      </td>
      <td>
        {good + neutral + bad}
      </td>
    </tr>
  </div>
)
const Average = ({good, neutral, bad}) => (
  <div>
    <tr>
      <td>
        Average:
      </td>
      <td>
        {(good - bad)/(good + neutral + bad)}
      </td>
    </tr>
  </div>
)

const Positive = ({good, neutral, bad}) => (
  <div>
    <tr>
      <td>
        Positive:
      </td>
      <td>
      {good / ((good + neutral + bad)/100)}%
      </td>
    </tr>
  </div>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setbad] = useState(0)

  const [votes, setVotes] = useState({good: 0, neutral: 0, bad: 0})

  const handleGoodV2 = () => setVotes({...votes, good: votes.good + 1})

  const handleNeutralV2 = () => setVotes({...votes, neutral: votes.neutral + 1})

  const handleBadV2 = () => setVotes({...votes, bad: votes.bad + 1})

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setbad(bad + 1)

  console.log(votes)
  console.log(votes.good)

  return (
    <>
      <Header />
      <Button handleClick = {handleGoodV2} text = {"good"}/>
      <Button handleClick = {handleNeutralV2} text = {"neutral"}/>
      <Button handleClick = {handleBadV2} text = {"bad"}/>
      <Statistics {...votes}/>
    </>
  )
}

export default App
