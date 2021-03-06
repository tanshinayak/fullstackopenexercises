import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App=()=>{
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [num,setnum]=useState(0)
  const [maxnum,setmaxnum]=useState(0)
  const [vote,setvote]=useState([0,0,0,0,0,0])
  const randomquote=()=>{
   setnum(Math.floor(Math.random() * anecdotes.length))
  }
  const votequote=(n)=>{
    const copy=[...vote]
    copy[n]+=1
    setvote(copy)
    setmaxnum(vote.indexOf(Math.max(...vote)))
  }
  return(
    <div>
      <h1>Anecdote of the Day</h1>
    <p>{anecdotes[num]}</p>
    <p>Has {vote[num]} votes</p>
    <button onClick={()=>votequote(num)}>Vote</button>
    <button onClick={randomquote}>Next</button>
    <h1>Anecdote with most number of votes</h1>
    <p>{anecdotes[maxnum]}</p>
    <p>Has {vote[maxnum]} votes</p>
    </div>
  )
}
ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);

