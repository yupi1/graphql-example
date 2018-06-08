import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

userSchema.pre('save', function(next) {
  const user = this;
  User.find({ email: user.email }, (err, doc) => {
    if (!doc.length) {
      bcrypt.hash(user.password, 10, (error, hash) => {
        if (error) {
          return next(error);
        }
        user.password = hash;
        next();
      });
    } else {
      console.log('user exists: ', user.username);
      next(new Error(`User with this email ${user.email} exist`));
    }
  });
});

export default User;
