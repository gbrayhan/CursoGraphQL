'use strict'

// Configurar los resolvers
const cursos = [{
  _id: 1221,
  titulo: 'Bases de Datos',
  maestro: 'Alejandro Guerrero',
  descripcion: 'Curso introductorio de base de datos',
  topic: 'Estructuras'
},
  {
    _id: 1231,
    titulo: 'Python',
    maestro: 'Alejandro Maza',
    descripcion: 'Curso intermedio de Python',
    topic: 'Programacion'
  }
]

module.exports = {
  getCursos: () => {
    return cursos
  }

}
