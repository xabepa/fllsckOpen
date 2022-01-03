import React, {useState} from "react";


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  switch(text) {
    case "positive":
      return (
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
      )
      break;
    default:
      return (
        <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      )
  }
}

const Statistics = (props) => {
  const good = props.stats.good
  const bad = props.stats.bad
  const neutral = props.stats.neutral

  const totalVotes = good + neutral + bad
  const avgScore = (good * 1 + bad * -1) / totalVotes
  const positivePercentage = (good / totalVotes) * 100

  if (totalVotes === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={totalVotes} />
      <StatisticLine text='average' value={avgScore} />
      <StatisticLine text='positive' value={positivePercentage} />
      </tbody>
    </table>
  )
}

const App = () => {
  //save clicks of buttons to their own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleResetClick = () => {
    setGood(0)
    setBad(0)
    setNeutral(0)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Button onClick={handleResetClick} text='zero' />
      <h2>statistics</h2>
      <Statistics stats={stats} />
    </div>
  )
}

export default App