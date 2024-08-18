import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export const UserSignup = mongoose.model('UserSignup', schema)