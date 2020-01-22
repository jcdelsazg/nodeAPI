import express from 'express'

import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import routes from './src/routes/apiRoutes'

const app = express()
const PORT = 4000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/apiNode', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) => {
    res.send(`Node and Express server running and port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your serve is running on port ${PORT}`)
})
