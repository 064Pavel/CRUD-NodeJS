const express = require('express')
const userRouter = require('../app/routes/user.routes')

const PORT = 3000

const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.get('/', (req, res) => {
    res.send('Server worked')
})

app.listen(PORT, () => {
    console.log("Server started");
})