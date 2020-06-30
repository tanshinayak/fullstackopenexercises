import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Course=({course})=>{
  return(
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part=>
          <li key={part.id}>{part.name}</li>)}
      </ul>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
