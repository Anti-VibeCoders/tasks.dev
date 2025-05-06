-- - Dos tablas básicas para la app de tasks.dev

CREATE TABLE tareas (
    id INTEGER PRIMARY KEY
    AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT,
    completada BOOLEAN NOT NULL DEFAULT false
    hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE tareas_completadas (
    id INTEGER PRIMARY KEY
    AUTOINCREMENT,
    nombre TEXT NOT NULL
    descripcion TEXT,
    completada BOOLEAN NOT NULL DEFAULT false
    hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    hora_completada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)