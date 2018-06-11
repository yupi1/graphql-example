import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const REGISTRATION = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      title,
      message
    }
  }
`

const Registration = () => {
  let username = '', email = '', password = '';
  return (
    <Mutation mutation={REGISTRATION}>
      {(signup, data) => (
        <Card>
          <CardContent>
            <div className="signup-form">
              <h2>Registration form</h2>

              <TextField
                id="username"
                label="Username"
                margin="normal"
                onChange={e => username = e.target.value}
              />

              <TextField
                id="email"
                label="Email"
                margin="normal"
                onChange={e => email = e.target.value}
              />
              
              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange={e => password = e.target.value}
              />

              <Button onClick={() => {
                  if (username !== '' && email !== '' && password !== '') {
                    signup({ variables: { username, email, password }})
                  }
                }} 
                variant="contained" 
                color="primary"
              > 
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </Mutation>
  ) 
}

export default Registration;