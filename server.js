import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import apiRouter from './src/server/routes/api.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ success: "¡Bienvenido a la API de Tasks.dev!" })
})

app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
})