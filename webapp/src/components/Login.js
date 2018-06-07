import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const GET_BOOKS = gql`
  query books($id: Int){
    books(id: $id) {
      title,
      author,
      id
  }
}
`

const Login = inject('loginForm')(observer((props) => {
    const { loginForm } = props;
    
    return (
        <div className="wrapper">        
          <Query query={GET_BOOKS}>
            {({ loading, error, data }) => {
              if(loading) return "Loading ...!"
              return (
                <Fragment>
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
                          onChange={e => loginForm.passwordAdd(e.target.value)}
                          autoComplete="current-password"
                          margin="normal"
                        />
  
                        <Button variant="contained" color="primary">
                          Authorization
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
  
                  {
                    data.books.map((item, index) => (
                      <div key={`${index}-${item.author}`}>
                          <div>Title: {item.title}</div>
                          <div>Author: {item.author}</div>
                      </div>
                    ))
                  }
                </Fragment>
              )
            }}
        </Query>
        </div>
    );
}));

export default Login;