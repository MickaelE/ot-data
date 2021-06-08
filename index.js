const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDB = require('./config/db')
const movieRouter = require('./routes/api/regRoutes')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))