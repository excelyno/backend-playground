const express = require('express'); 
const cors = require('cors');   
const app = express();          
const port = 3000;              
app.use(cors());                
app.use(express.json());        


let todos = [
    {id: 1, task: "Belajar backend pemula", done: false},
    {id: 2, task: "membuat server express", done: true},
]


app.get('/', (req, res) => {
  res.send('Halo! Server Backend kamu sudah berjalan! 🚀');
});

app.get('/todos',(req, res) =>{
    res.json(todos);
})

app.post('/todos', (req, res) => {
  const dataBaru = req.body;
  todos.push(dataBaru);
  res.send("Data berhasil disimpan!")
});

app.put('/todos/:id', (req, res) =>{
  const todo = todos.find(t => t.id == parseInt(req.params.id)) 

  if (!todo){
    res.status(404).send("tugas tidak ditemukan!")
  }
  todo.task = req.body.task;
  todo.done = req.body.done;
  res.json(todo)


})


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});