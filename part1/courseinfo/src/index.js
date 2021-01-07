import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  let i
  let res=[]
  for( i = 0; i< props.course.parts.length ; i++){
    res.push(<Part part={props.course.parts[i].name} 
    exercises={props.course.parts[i].exercises}/>)
  }
  console.log("res is " + res)
  return (
    <div>
      {res}
    </div>
  )
}


const Total = (props) => {
  let total = 0
  let i
  for(i = 0;i<props.course.parts.length;i++){
    total += props.course.parts[i].exercises;
  }
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

