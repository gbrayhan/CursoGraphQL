'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000

// Definimos el esquema inicial
const schema = buildSchema(`
    type Query {
        "Retorna un saludo al mundo" 
        hello: String
        "Retorna un saludo generico" 
        saludo: String
    }
 `)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo'
  },
  saludo: () => {
    return 'Hola a Todos'
  }
}

app.use('/app', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/app `)
})

// Se ejecuta el query Hello y saludo
// graphql(schema, '{ hello, saludo }', resolvers).then((data) => {
//     console.log(data);
// });
