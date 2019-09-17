"use strict";

const {graphql, buildSchema} = require('graphql');

// Definimos el esquema inicial
const schema = buildSchema(`
    type Query {
        hello: String
    }
 `);

// Se ejecuta el query Hello
graphql(schema, '{ hello }').then((data) => {
    console.log(data);
});
