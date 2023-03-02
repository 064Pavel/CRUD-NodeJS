const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Server worked')
})

app.listen(PORT, () => {
    console.log("Server started");
})