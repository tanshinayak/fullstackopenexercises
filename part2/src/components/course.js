import React from 'react'
const Course=({course})=>{
    console.log(course)
    return(
      <div>
        {course.map(course=>
        <div>
        <h1>{course.name}</h1>
        {course.parts.map(x=>
          <p>{x.name} {x.exercises}</p>)}
          <Total course={course}/>
          </div>)}
      </div>
    )
  }
  const Total=({course})=>{
    let arr=0
    arr=course.parts.reduce(function(a, b){
      return a + b.exercises;
  }, 0)
    return(
      <div>
        <p><b>total number of exercises are {arr}</b></p>
      </div>
   )
  }
  export default Course;