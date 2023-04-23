const express = require('express')
const app = express()
const port = 8000

app.get('/', (req,res) =>{
    res.send('<h1>Estudo</h1>')
})

app.listen(port, ()=>{
    console.log("Está rodando na porta " +port)
})