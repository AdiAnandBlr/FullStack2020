import React from 'react';

const Header = (props) => {
    return (
      <div>
        <h2>{props.course.name}</h2>
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
      exercises={props.course.parts[i].exercises} key={props.course.parts[i].id}/>)
    }
    console.log("res is " , res)
    return (
      <div>
        {res}
      </div>
    )
  }
  
  
  const Total = (props) => {
    const accumulator = (acc,val) => acc+val.exercises
    const total = props.course.parts.reduce(accumulator,0)
    console.log(total)
    return (
      <div>
        <p>total of {total} exercises</p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course = {course}/>
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
  }

  export default Course