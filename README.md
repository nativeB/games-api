# game api

## prerequisites
 * typescript ^4.6.3
 * mongodb  ^4.4
 * nodejs ^14


## Getting Started
 * rename .env.example to .env
 * open terminal to folder
 * run command npm i 
 * run command npm run build:watch
 * open another terminal to folder
 * run npm run start

## Routes
 # Get : /games/:gameId
    get a game
 ## params
1. gameId
    * Objectid
    * Required 
 # Get : /games
    get multiple games by query, uses mongo queries formatted for uri queries. eg ?userId__in=1,2   platforms__in=PC,XBOX
    
[https://www.npmjs.com/package/query-params-mongo](https://www.npmjs.com/package/query-params-mongo)


