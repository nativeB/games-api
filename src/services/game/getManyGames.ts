import { GameDocumentInterface, Game } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getManyGames(query: BasicObjectType, options: BasicObjectType): Promise<GameDocumentInterface[]> {
    return  Game.find(query,null,options)
}