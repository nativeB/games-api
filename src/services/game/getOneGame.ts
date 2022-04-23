import { GameDocumentInterface, Game } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getOneGame(query: BasicObjectType): Promise<GameDocumentInterface | null> {
    return Game.findOne(query)
}