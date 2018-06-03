import React, { Component } from 'react';
import './App.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_BOOKS = gql`
  {
    books {
      title,
      author
  }
}
`

class App extends Component {
  render() {
    return (
      <Query query={GET_BOOKS}>
        {({loading, error, data}) => {
          if(loading) return "Loading ...!"
          return (
            data.books.map((item, index) => (
              <div key={`${index}-${item.author}`}>
                  <div>Title: {item.title}</div>
                  <div>Author: {item.author}</div>
              </div>
            )
          ))
        }}
      </Query>
    );
  }
}

export default App;