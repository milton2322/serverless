const express = require("express")
const app = express()

app.get('*', (req, res) => {
  console.log("hola mundo aplicacion serverless");
  res.send({ mensaje: 'ingreso'})
})

module.exports = app