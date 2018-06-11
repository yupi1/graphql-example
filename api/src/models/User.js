import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

export default User;
