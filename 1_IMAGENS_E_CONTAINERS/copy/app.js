const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Olá minha image')
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
})