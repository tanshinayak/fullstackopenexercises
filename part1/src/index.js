import React,{useState} from 'react';
import ReactDOM from 'react-dom';
const Button=(props)=>{
  return(
    <div>
      <button onClick={props.handleclick}>{props.text}</button>
    </div>
  )
}
const Statistics=(props)=>{
  return(
    <div>
  <p>{props.text} {props.num}</p></div>
  )
}
const App = () => {
  const [good,setgood]=useState(0)
  const [neutral,setneutral]=useState(0)
  const [bad,setbad]=useState(0)
  const goodclick=()=>{
    setgood(good+1)
  }
  const neutralclick=()=>{
    setneutral(neutral+1)
  }
  const badclick=()=>{
    setbad(bad+1)
  }
  if (good===0&&neutral===0&&bad===0){
    return(
      <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleclick={goodclick} />
      <Button text="neutral" handleclick={neutralclick} />
      <Button text="bad" handleclick={badclick} />
      <h1>Statistics</h1>
      <p>No Feedback Given</p>
      </div>
    )
  }
  else{
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleclick={goodclick} />
      <Button text="neutral" handleclick={neutralclick} />
      <Button text="bad" handleclick={badclick} />
      <h1>Statistics</h1>
      <table>
     <tr> <Statistics text="good" num={good}/></tr>
     <tr> <Statistics text="neutral" num={neutral}/></tr>
     <tr> <Statistics text="bad" num={bad}/></tr>
      <tr><Statistics text="all" num={good+neutral+bad}/></tr>
      <tr><Statistics text="average" num={(good-bad)/(good+bad+neutral)}/></tr>
      <tr><Statistics text="percentage" num={(good/(good+neutral+bad))*100+'%'}/></tr>
      </table>
    </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))