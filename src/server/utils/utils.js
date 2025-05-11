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

// - Función para obtener todas las tareas
export const obtenerTareas = (req, res) => {
    res.json(tareas)
}

// - Función para obtener una tarea por su id
export const encontrarTareaPorId = (req, res) => {
    // ? Obtenemos el id por params
    const { id } = req.params
    // ? Buscamos la tarea por id y si existe la devolvemos, sino devolvemos un error
    const tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    // ? Devolvemos la tarea
    res.json(tarea)
}

// - Función para crear una nueva tarea
export const crearTarea = (req, res) => {
    // ? Obtenemos el nombre y la descripción por el body
    const { nombre, descripcion } = req.body
    // ? Creamos la nueva tarea y la agregamos al array
    const nuevaTarea = {
        id: tareas.length + 1,
        nombre,
        descripcion,
        completada: false
    }
    tareas.push(nuevaTarea)
    // ? Devolvemos el mensaje de éxito
    res.json({ success: "Tarea creada con éxito" })
}

// - Función para actualizar una tarea por su id
export const actualizarTarea = (req, res) => {
    // ? Obtenemos el id por params
    const { id } = req.params
    // ? Obtenemos el nombre, la descripción y completada por el body
    const { nombre, descripcion, completada } = req.body
    //? Buscamos la tarea por id y si existe la actualizamos, sino devolvemos un error
    let tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    tarea.nombre = nombre
    tarea.descripcion = descripcion
    tarea.completada = completada
    // ? Devolvemos el mensaje de éxito
    res.json({ success: "Tarea actualizada con éxito" })
}

// - Función para eliminar una tarea por su id
export const eliminarTareaPorId = (req, res) => {
    // ? Obtenemos el id por params
    const { id } = req.params
    // ? Buscamos la tarea por id y si existe la eliminamos, sino devolvemos un error
    const tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    tareas = tareas.filter(tarea => tarea.id !== parseInt(id))
    // ? Devolvemos el mensaje de éxito
    res.json({ success: "Tarea eliminada con éxito" })
}

// - Función para eliminar todas las tareas
export const eliminarTodasLasTareas = (req, res) => {
    tareas = []
    res.json({ success: "Todas la tareas se eliminar correctamente" })
}