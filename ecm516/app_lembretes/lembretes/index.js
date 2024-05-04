const express = require('express');
const app = express();
app.use(express.json());

const lembretes = {};
let contador = 0

app.get('/lembretes', (req, res) => {
  res.send(lembretes);
})

app.post('/lembretes', (req, res) => {
    const { texto } = req.body;
    contador++;
    lembretes[contador] = {
      contador, texto
    }
  res.status(201).send(lembretes[contador]);
})

app.listen(4000, () => {
  console.log('Lembretes na porta 4000');
})
