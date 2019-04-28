import bcrypt from 'bcryptjs'
import mongoose, { Model, Schema } from 'mongoose'
import { IUserDoc } from '../interfaces/user'
import generateAuthToken from '../utils/generateAuthToken'
import hashPassword from '../utils/hashPassword'
import Character from './character'

export interface IUser extends IUserDoc {
  generateAuthToken(): string
}

export interface IUserModel extends Model<IUser> {
  findByCredentials: (email: string, password: string) => IUser
}

const userSchema: Schema = new Schema<IUser>(
  {
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
    emailVerified: {
      type: Boolean,
      default: false,
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
  },
  {
    timestamps: true,
  }
)

userSchema.methods.generateAuthToken = async function() {
  const user = this as IUser
  const token = generateAuthToken(user._id)

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

// Setup relationship between user and characters
userSchema.virtual('characters', {
  ref: 'Character',
  localField: '_id',
  foreignField: 'owner',
})

// Automatically remove password and tokens array whenever Express stringifies this object
userSchema.methods.toJSON = function() {
  const user = this as IUser
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens
  delete userObject.emailVerified

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

// Delete all characters owned by user when user is removed
userSchema.pre<IUser>('remove', async function(next) {
  const user = this

  await Character.deleteMany({ owner: user._id })

  next()
})

const User = mongoose.model<IUser, IUserModel>('User', userSchema)

export default User
