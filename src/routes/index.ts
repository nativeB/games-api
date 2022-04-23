import {getGames, getGameById} from "../controller";

import { Router } from "express";
import {  gameGetRouteValidator } from "../validators";
import { generateStatistics, validateIncoming } from "../middleware";

const router = Router();

router.get("/health", (_,res)=>{
    res.send("hello")
});
router.get("/games",generateStatistics, getGames);
router.get("/games/:gameId", gameGetRouteValidator, validateIncoming, getGameById );

export default router;