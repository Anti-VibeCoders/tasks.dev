import express from 'express'
import { obtenerTareas, encontrarTareaPorId, crearTarea, actualizarTarea, eliminarTareaPorId, eliminarTodasLasTareas } from '../utils/utils.js'

const apiRouter = express.Router()

apiRouter.get('/tareas',obtenerTareas)

apiRouter.get('/tareas/:id', encontrarTareaPorId)

apiRouter.post('/tareas', crearTarea)

apiRouter.put('/tareas/:id', actualizarTarea)

apiRouter.delete('/tareas/:id', eliminarTareaPorId)

apiRouter.delete('/tareas', eliminarTodasLasTareas)

export default apiRouter