import { NextFunction, Request, Response } from "express";
import { countGames } from "../services";

export async function generateStatistics (_req: Request, res: Response, next: NextFunction) {
        try{
                const total = await countGames({});
        
                res.set("x-total-games",`${total}`)
                next()

        }catch(error){
                return next(error)
        }
}