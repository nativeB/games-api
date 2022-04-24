import * as mongoose from "mongoose"
import { GameTypes } from "../../types"
import constants from "../../utils/constants"

export interface GameInterface {
  userId: number,
  game: string,
  playTime: number,
  genre: string,
  platforms: GameTypes[],
}

interface GameModelInterface extends mongoose.Model<GameDocumentInterface> {
}

export interface GameDocumentInterface extends mongoose.Document {
  userId: number,
  game: string,
  playTime: number,
  genre: string,
  platforms: GameTypes[],
}

const GameSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  playTime: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  platforms: {
    type: [String],
    required: true,
    enum: constants.GAME_TYPES
  }
},
{
  timestamps: true
})
const Game = mongoose.model<GameDocumentInterface, GameModelInterface>("Game", GameSchema)


export { Game }




