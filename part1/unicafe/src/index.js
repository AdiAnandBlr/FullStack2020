import { getAllByAltText } from '@testing-library/react'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  const {text,value} = props
  return(
    
      <tr>
        <td>{text}</td>
        <td>{value} </td>
      </tr>
    
  )
}

const Statistics = ({good,neutral,bad}) => {
  const getAll = () => good+neutral+bad
  const getAverage = () => (good-bad)/getAll()
  const getPositive = () => good/getAll()*100+'%'
  if(!getAll()){
    return(<div>
      <h1> statistics </h1>
      <p> No feedback given </p>
    </div>)
  }
  return (
    <div>
      <h1> statistics </h1>
      <table>
        <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={ getAll() } />
        <Statistic text="average" value={ getAverage() } />
        <Statistic text='positive' value={ getPositive() } />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleBadClick = () => setBad(bad+1)
  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  return (
    <div>
      <h1> give feedback </h1>
      <Button text = "good" handleClick={handleGoodClick} />
      <Button text = "neutral" handleClick={handleNeutralClick} />
      <Button text = "bad" handleClick={handleBadClick} />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)