/* tslint-disable no-debugger, no-console */
import dotenv = require("dotenv")
dotenv.config();

import  * as mongoose from "mongoose"
import {  Game } from "../mongoose/models";
// import games json
import { data as games } from "../data/games.json";
(()=>{
    try{
        console.log("inserting games...")
        mongoose.connect(process.env.MONGO_URI as string, {
        }, async () => {

            // insert games to database using insertMany method
            await Game.insertMany(games)
            console.log("done inserting games!")
            mongoose.disconnect()
            process.exit(0);
        })
    }catch(err){
        console.log(err)
        process.exit(1);
    }
})()