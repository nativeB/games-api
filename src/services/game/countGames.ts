import {  Game } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function countGames(query: BasicObjectType): Promise<number> {
    return  Game.countDocuments(query)
}