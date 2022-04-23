import {  Request, Response } from "express";
import { getOneGame } from "../../services";
import { getObjectId } from "../../utils";
import constants from "../../utils/constants";

export const getGameById =  async (req: Request, res: Response) => {
  try{
    const  gameId = req.params.gameId;

    const game = await getOneGame({_id : getObjectId(gameId) })

    if(!game) {
      return res.status(404).send({
        success:false,
        message: constants.STATUS_CODES[404]
    })
    }
    return res.json({
      success: true,
      game
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
  })
}
  };