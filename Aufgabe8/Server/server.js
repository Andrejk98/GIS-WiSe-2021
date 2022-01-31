"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTabelle = void 0;
const http = require("http");
const mongodb_1 = require("mongodb");
var EventTabelle;
(function (EventTabelle) {
    const hostname = "127.0.0.1";
    const port = 3000;
    const mongoUrl = "mongodb://127.0.0.1:27017";
    let mongoClient = new mongodb_1.MongoClient(mongoUrl);
    async function dbFind(db, collection, response) {
        mongoClient.connect();
        let result = await mongoClient
            .db(db)
            .collection(collection)
            .find()
            .toArray();
        response.setHeader("Content-Type", "application/json");
        console.log(JSON.stringify(result));
        response.write(JSON.stringify(result));
    }
    async function add(request, response) {
        let jsonString = "";
        request.on("data", (event) => {
            jsonString += event;
        });
        request.on("end", async () => {
            let inputEvent = JSON.parse(jsonString);
            let MongoConcert = {
                _id: new mongodb_1.ObjectId(), interpret: inputEvent.interpret, price: inputEvent.price
            };
            console.log("incomingevent: ", jsonString);
            await post(MongoConcert);
            response.statusCode = 200;
            response.end();
        });
    }
    async function post(event) {
        const result = await mongoClient.connect();
        console.log(result);
        await mongoClient.db("Concert").collection("Event").replaceOne({
            _id: event._id
        }, event, { upsert: true });
        await mongoClient.close();
    }
    const server = http.createServer();
    server.addListener("request", handleRequest);
    async function handleRequest(request, response) {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html; charset=utf-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) {
            case "/concertEvent": {
                await mongoClient.connect();
                switch (request.method) {
                    case "GET":
                        await dbFind("Concert", "Event", response);
                        break;
                    case "POST":
                        await add(request, response);
                        break;
                }
                break;
            }
            default:
                response.statusCode = 404;
        }
        response.end();
    }
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
})(EventTabelle = exports.EventTabelle || (exports.EventTabelle = {}));
//# sourceMappingURL=server.js.map