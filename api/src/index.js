import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Sorcerer\'s stone',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = `
  type Query { 
      books(id: Int): [Book] 
    }
  type Book { id: Int!, title: String, author: String }
`;

const resolvers = {
  Query: {
    books(_, { id }) {
      if (typeof id === 'number') {
        return books.filter(item => item.id === id);
      }
      return books;
    },
  },
};

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
