import { Request, Response } from "express";
import { countGames, getManyGames } from "../../services";
import { processQuery } from "../../utils";
import constants from "../../utils/constants";
import { gameQueryParamsValidator } from "../../validators";

export const getGames =  async (req: Request, res: Response) => {
  try{
    const query = processQuery(req.query, gameQueryParamsValidator);
    const {filter, ...options} = query;
    const totalRecords = await countGames(filter)
    const subscribers = await getManyGames(filter, options)

    return res.json({
      success: true,
      totalRecords,
      subscribers
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
  })
}
  };