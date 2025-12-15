const express = require('express'); // 1. Memanggil library express
const cors = require('cors');       // 2. Memanggil library cors
const app = express();              // 3. Membuat inisialisasi aplikasi express
const port = 3000;                  // 4. Menentukan port (pintu) server

app.use(cors());                    // 5. Mengizinkan akses dari luar (penting untuk frontend nanti)
app.use(express.json());            // 6. Agar server bisa membaca data JSON yang dikirimkan


//database sementara
let todos = [
    {id: 1, task: "Belajar backend pemula", done: false},
    {id: 2, task: "membuat server express", done: true},
]

// Route utama (Halaman depan)
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





// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});