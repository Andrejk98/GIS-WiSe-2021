"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gefrierschrank = void 0;
const http = require("http");
const mongodb_1 = require("mongodb");
var Gefrierschrank;
(function (Gefrierschrank) {
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
            //let inputÜbersicht: übersichtEvent = JSON.parse(jsonString);
            let inputDetail = JSON.parse(jsonString);
            let MongoGefrierschrank = {
                _id: new mongodb_1.ObjectId(), gefriergut: inputDetail.gefriergut, ablaufdatum: inputDetail.ablaufdatum, notiz: inputDetail.notiz, anlegedatum: inputDetail.anlegedatum, kategorie: inputDetail.kategorie
            };
            console.log("incomingevent: ", jsonString);
            await post(MongoGefrierschrank);
            response.statusCode = 200;
            response.end();
        });
    }
    async function post(event) {
        const result = await mongoClient.connect();
        console.log(result);
        await mongoClient.db("Gefrierschrank").collection("Gefriergut").replaceOne({
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
            case "/Gefrierschrank": {
                await mongoClient.connect();
                switch (request.method) {
                    case "GET":
                        await dbFind("Gefrierschrank", "Gefriergut", response);
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
})(Gefrierschrank = exports.Gefrierschrank || (exports.Gefrierschrank = {}));
//# sourceMappingURL=server.js.map