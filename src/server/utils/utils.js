export let tareas = [
    {
        id: 1,
        nombre: 'Tarea 1',
        descripcion: 'Descripcion de la tarea',
        completada: false
    },
    {
        id: 2,
        nombre: 'Tarea 2',
        descripcion: 'Descripcion de la segunda tarea',
        completada: false
    },
    {
        id: 3,
        nombre: 'Tarea 3',
        descripcion: 'Descripcion de la tercer tarea',
        completada: false
    }
]

export const obtenerTareas = (req, res) => {
    res.json(tareas)
}

export const encontrarTareaPorId = (req, res) => {
    const { id } = req.params
    const tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    res.json(tarea)
}

export const crearTarea = (req, res) => {
    const { nombre, descripcion } = req.body
    const nuevaTarea = {
        id: tareas.length + 1,
        nombre,
        descripcion,
        completada: false
    }
    tareas.push(nuevaTarea)
    res.json({ success: "Tarea creada con éxito" })
}

export const actualizarTarea = (req, res) => {
    const { id } = req.params
    const { nombre, descripcion, completada } = req.body
    let tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    tarea.nombre = nombre
    tarea.descripcion = descripcion
    tarea.completada = completada
    res.json({ success: "Tarea actualizada con éxito" })
}

export const eliminarTareaPorId = (req, res) => {
    const { id } = req.params
    const tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    tareas = tareas.filter(tarea => tarea.id !== parseInt(id))
    res.json({ success: "Tarea eliminada con éxito" })
}

export const eliminarTodasLasTareas = (req, res) => {
    tareas = []
    res.json({ success: "Todas la tareas se eliminar correctamente" })
}