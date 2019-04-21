import bcrypt from 'bcryptjs'
import mongoose, { Model, Schema } from 'mongoose'
import { IUserDoc } from '../interfaces/user'
import generateAuthToken from '../utils/generateAuthToken'
import hashPassword from '../utils/hashPassword'

export interface IUser extends IUserDoc {
  generateAuthToken(): string
}

export interface IUserModel extends Model<IUser> {
  findByCredentials: (email: string, password: string) => IUser
}

const userSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

userSchema.methods.generateAuthToken = async function() {
  const user = this as IUser
  const token = generateAuthToken(user._id)

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

// Automatically remove password and tokens array whenever Express stringifies this object
userSchema.methods.toJSON = function() {
  const user = this as IUser
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}

// Method to find users based on credentials
userSchema.statics.findByCredentials = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to login')
  }

  return user
}

// Hash password before saving document
userSchema.pre<IUser>('save', async function(next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await hashPassword(user.password)
  }

  next()
})

const User = mongoose.model<IUser, IUserModel>('User', userSchema)

export default User
