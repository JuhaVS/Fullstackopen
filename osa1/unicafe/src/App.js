import React, { useState } from 'react'


const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = `${props.good / total * 100}%`


  if (total < 1)
    return(
    <div>
      <p>No feedback given</p>
    </div>)
  
  else {
  return (

    <div>
      <table>
        <tbody>
         <StatisticLine text="Good" value = {props.good}/>
         <StatisticLine text="Neutral" value = {props.neutral}/>
         <StatisticLine text="Bad" value = {props.bad}/>
         <StatisticLine text="All" value = {total}/>
         <StatisticLine text="Average" value = {average}/>
         <StatisticLine text="Positive" value = {positive}/>
        </tbody>
        </table>
    </div>
  )
  }
}

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGoodClick = () => {setGood(good + 1) }

const handleNeutralClick = () => {setNeutral(neutral + 1) }

const handleBadClick = () => {setBad(bad + 1) }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App