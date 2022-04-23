import { GameTypes } from "../types";


const GAME_TYPES: GameTypes[]  = ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC", "Xbox 360" , "Android"]
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
    customerIdOwner: {
        required: "Customer id of owner is required",
        type: "Customer id of owner should be a number"
    },
    customerIdUser: {
        required: "Customer Id of user is required",
        type: "Customer Id of user owner should be a number"
    },
    serviceType: {
        required: "Game Type is  required",
        type: `Game type must be one of ${GAME_TYPES.join(",")}`
    },
    msisdn: {
        required: "msisdn is required",
        type: "msisdn must be in E164 format",
        exists: "msisdn already exists!"
    },
    subscriberId: {
        required: "subscriberId param is required",
        type: "Subscriber id should be an objectid"
    }
}
const constants = Object.freeze({
    GAME_TYPES,
    STATUS_CODES,
    ERROR_MESSAGES
})

export default constants;