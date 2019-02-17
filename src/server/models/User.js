import { Schema, model } from 'mongoose';

const User = new Schema({
  name: { type: String },
  bags: { type: Number },
});

export default model('users', User);
