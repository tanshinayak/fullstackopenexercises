const express =require("express");
const app=express();
app.use(express.json());
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]
app.get('/api/notes',(req,res)=>{
    const note = req.body
  console.log(note)
    res.json(notes);
})
app.get('/info',(req,res)=>{
    let time=new Date();
res.send(`<div><p>Phonebook has info for ${notes.length} people</p>
<p>${time}</p></div>`);
})
app.listen(3001);