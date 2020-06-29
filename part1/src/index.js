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
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleclick={goodclick} />
      <Button text="neutral" handleclick={neutralclick} />
      <Button text="bad" handleclick={badclick} />
      <h1>Statistics</h1>
      <Statistics text="good" num={good}/>
      <Statistics text="neutral" num={neutral}/>
      <Statistics text="bad" num={bad}/>
      <Statistics text="all" num={good+neutral+bad}/>
      <Statistics text="average" num={(good-bad)/(good+bad+neutral)}/>
      <Statistics text="percentage" num={(good/(good+neutral+bad))*100}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))