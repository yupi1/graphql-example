import React, { Component } from 'react';
import './App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const GET_BOOKS = gql`
  {
    books {
      title,
      author
  }
}
`
@inject('loginForm')
@observer
class App extends Component {
  render() {
    const { loginForm } = this.props;

    return (
      <div className="wrapper">
        <Card>
          <CardContent>
            <div className="login-form">
              <h2>Login</h2>

              <TextField
                id="username"
                label="Username"
                onChange={e => loginForm.usernameAdd(e.target.value)}
                margin="normal"
              />

              <TextField
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />

              <Button variant="contained" color="primary">
                Authorization
              </Button>
            </div>
          </CardContent>
        </Card>
        
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
      </div>
    );
  }
}

export default App;