"use strict";

const {graphql, buildSchema} = require('graphql');

// Definimos el esquema inicial
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
 `);

// Configurar los resolvers
const resolvers = {
    hello: () => {
        return 'Hola Mundo'
    },
    saludo: () => {
        return 'Hola a Todos'
    }
};

// Se ejecuta el query Hello y saludo
graphql(schema, '{ hello, saludo }', resolvers).then((data) => {
    console.log(data);
});
