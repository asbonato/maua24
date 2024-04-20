const http = require('http')
const express = require('express')
const app = express()
app.use(express.json())

let contador = 2
const clientes = [
    {
        id:1,
        nome:'João',
        email:'joao@email.com'
    },
    {
        id:2,
        nome:'Cristina',
        email:'cristina@email.com'
    }
]

const porta = 3000
app.set('port', porta)

app.get('/teste', (req, res, next) => {
    res.send("Olá!")
})

app.get('/clientes', (req, res) => 
    res.json(clientes)
)

app.post('/clientes', (req, res) => {
    const cliente = req.body
    clientes.push({id: contador += 1,
                   nome: cliente.nome,
                   email: cliente.email})
    res.status(201).json(clientes)
})

const server = http.createServer(app)
server.listen(porta)