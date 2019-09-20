'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const resolvers = require('./lib/resolvers.js')

const app = express()
const port = process.env.port || 3000

// Definimos el esquema
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8'))



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
