const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const tarefas = []
let id = 1
app.get('/tarefas', (req, res) => {
    res.json(tarefas)
})

app.post('/tarefas', (req, res) => {
    const texto = req.body.texto
    const tarefa = {id, texto}
    tarefas.push(tarefa)
    id++
    res.status(201).json(tarefa)
})
const PORT = 50000
app.listen(PORT, () => {console.log(`Executando. Porta ${PORT}`)})

