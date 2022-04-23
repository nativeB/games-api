
import {check} from "express-validator";
import constants from "../utils/constants";



export const gameQueryParamsValidator = {
  _id: { datatype: "objectid", required: false},
  userId: { datatype: "number", required: false},
  game:  { datatype: "string", required: false },
  playTime:  { datatype: "number", required: false},
  genre: { datatype: "number", required: false},
  platforms: { datatype: "string", required: false}
}



export const gameGetRouteValidator = [
    check("gameId",constants.ERROR_MESSAGES.subscriberId.required ).exists().isMongoId().withMessage(constants.ERROR_MESSAGES.subscriberId.type)
  ]

