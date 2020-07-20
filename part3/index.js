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
  app.get("/api/persons",(req,res)=>{
    const note = req.body
    console.log(note)
      res.json(notes);
  })
  app.post('/api/persons/:content',(req,res)=>{
    const name=req.params.content;
    const id=(Math.random()*10)/10;
    const date=new Date();
    const newNote={
        name,id,date
    };
    notes=notes.concat(newNote);
})
app.get('/api/notes',(req,res)=>{
    const note = req.body
  console.log(note)
    res.json(notes);
})
app.get('/api/notes/:id',(req,res)=>{
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id)
    if(note)
  {console.log(note)
    res.json(notes);}
    else 
    {
        res.status(404).end();
    }
})
app.delete('/api/notes/:id',(req,res)=>{
    const id =req.params.id;
    notes=notes.filter(note=>note.id!==id)
    res.status(204).end()
})
app.get('/info',(req,res)=>{
    let time=new Date();
res.send(`<div><p>Phonebook has info for ${notes.length} people</p>
<p>${time}</p></div>`);
})
app.listen(3001);