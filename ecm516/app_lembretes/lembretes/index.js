const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const lembretes = {};
let contador = 0;

app.get("/lembretes", (req, res) => {
  res.send(lembretes);
});

app.post("/lembretes", async (req, res) => {
  const { texto } = req.body;
  contador++;
  lembretes[contador] = {
    contador,
    texto,
  };
  await axios.post("http://barramento-de-eventos-service:10000/eventos", {
    tipo: "LembreteCriado",
    dados: {
      contador,
      texto,
    },
  });
  res.status(201).send(lembretes[contador]);
});

app.post("/eventos", (req, res) => {
  console.log(req.body)
  res.status(200).send({ msg: "ok" });
});

app.listen(4000, () => {
  console.log("Usando services v2")
  console.log("Lembretes na porta 4000")
});
