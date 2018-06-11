import bcrypt from 'bcrypt';
import User from '../models/User';

const signup = async (_, { username, email, password }) => {
  const userExist = await User.findOne({ email });

  if (userExist) {
    return [
      {
        title: 'Email',
        message: `User with email "${email}" exist`,
      },
    ];
  }

  const hashPass = await bcrypt.hash(password, 10);
  User.create({
    username,
    email,
    password: hashPass,
  });

  return null;
};
const Mutation = {
  signup,
};

export default Mutation;
