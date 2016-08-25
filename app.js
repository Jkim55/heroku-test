'use strict'

require('dotenv').config()
const express = require('express')
const port = process.env.PORT
let app = express()

app.get('/', (req, res)=>{
  res.json({message: 'Herrrro! I am working. 😊 '})
})

app.listen(Number(port), ()=>{
  console.log('Server running on port: ', port)
})
