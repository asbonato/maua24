const express = require("express");
/* o axios serve para enviar eventos para os outros
   microsserviços */
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/eventos", (req, res) => {
  const evento = req.body;
  console.log(evento)
  //envia o evento para o microsserviço de lembretes
  axios.post("http://lembretes-service:4000/eventos", evento);
  //envia o evento para o microsserviço de observações
  //axios.post("http://10.2.128.75:5000/eventos", evento);
  //envia o evento para o microsservico de consultas
  //axios.post("http://10.2.128.75:6000/eventos", evento);
  //envia o evento para o microsserviço de classificação
  //axios.post("http://10.2.128.75:7000/eventos", evento);
  res.status(200).send({ msg: "ok" });
});

app.listen(10000, () => {
  console.log("Usando services v2")
  console.log("Barramento de eventos. Porta 10000.");
});
