import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/index';

require('dotenv').config();

const typeDefs = [
  fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

mongoose.connect('mongodb://localhost:27017/Graphql');

app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
