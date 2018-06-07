import User from '../models/User';

function signup(_, { username, email, password }) {
  const user = User.create({
    username,
    email,
    password,
  });

  return user;
}

const Mutation = {
  signup,
};

export default Mutation;
