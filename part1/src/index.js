import React from 'react';
import ReactDOM from 'react-dom';
const Header=(props)=>{
  return(
    <div>
      <h1>
        {props.course}
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
    <Part name={props.part[0].name} exercise={props.part[0].exercise}/>
    <Part name={props.part[1].name} exercise={props.part[1].exercise}/>
    <Part name={props.part[2].name} exercise={props.part[2].exercise}/>
  </div>
  )
}
const Total=(props)=>{
  return(
    <div>
      <p>
        Total Number of Exercises {props.sum[0].exercises+props.sum[1].exercises+props.sum[2].exercises}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts=[{
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

  return (
    <div>
      <Header course={course}/>
      <Content part={parts}/>
      <Total sum={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))