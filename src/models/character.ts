import mongoose, { Schema } from 'mongoose'
import { ICharacterDoc } from '../interfaces/character'

const characterSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  class: {
    type: Array,
  },
  race: {
    type: String,
  },
  strength: {
    type: Number,
  },
  dexterity: {
    type: Number,
  },
  constitution: {
    type: Number,
  },
  intelligence: {
    type: Number,
  },
  wisdom: {
    type: Number,
  },
  charisma: {
    type: Number,
  },
  maxHp: {
    type: Number,
  },
  currentHp: {
    type: Number,
  },
})

const Character = mongoose.model<ICharacterDoc>('Character', characterSchema)

export default Character
