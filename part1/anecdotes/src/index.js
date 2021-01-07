import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text,clickFunc}) => (
  <button onClick={clickFunc}>{text}</button>
)


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const [best, setBest] = useState(0)
  const nextAnecdote = () => {
    const nxt = Math.floor(props.anecdotes.length * Math.random())
    console.log(nxt)
    setSelected(nxt)
  }
  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
    setBest((copy[selected] > copy[best])?selected:best)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p> has {votes[selected]} votes </p>
      <Button text={"next anecdote"} clickFunc={nextAnecdote}/>
      <Button text="vote" clickFunc={voteAnecdote} />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[best]}</p>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)