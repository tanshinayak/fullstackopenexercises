import React from 'react';
import ReactDOM from 'react-dom';
const Header=(props)=>{
  return(
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}
const Part=(props)=>{
  return(
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
    </div>
  )
}
const Content=(props)=>{
  return(
  <div>
    <Part name={props.part.parts[0].name} exercise={props.part.parts[0].exercise}/>
    <Part name={props.part.parts[1].name} exercise={props.part.parts[1].exercise}/>
    <Part name={props.part.parts[2].name} exercise={props.part.parts[2].exercise}/>
  </div>
  )
}
const Total=(props)=>{
  return(
    <div>
      <p>
        Total Number of Exercises {props.sum.parts[0].exercises+props.sum.parts[1].exercises+props.sum.parts[2].exercises}
      </p>
    </div>
  )
}
const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
    {
    name:'Fundamentals of React',
    exercises:10
  },
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name:'State of a component',
  exercises: 14}
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content part={course}/>
      <Total sum={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))