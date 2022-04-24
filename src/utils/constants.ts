import { GameTypes } from "../types";


const GAME_TYPES: GameTypes[]  = ["PS4", "PS5", "PS3", "Xbox One", "Nintendo Switch", "PC", "Xbox 360" , "Android"]
const STATUS_CODES:  {
    [key: string]: string
} = {
    200: "Successful",
    500: "An error occurred, please try later",
    404: "The resource was not found",
    400: "Input parameters failed validation"
}
const ERROR_MESSAGES: {
    [key:string]:  {
        required: string;
        type: string;
        exists?: string;
    }
} = {
    gameId: {
        required: "gameId param is required",
        type: "game id should be an objectid"
    }
}
const constants = Object.freeze({
    GAME_TYPES,
    STATUS_CODES,
    ERROR_MESSAGES
})

export default constants;