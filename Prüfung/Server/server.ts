import * as http from "http";
import * as mongo from "mongodb";
import { MongoClient, ObjectId } from "mongodb";



export namespace Gefrierschrank {

    const hostname: string = "127.0.0.1";
    const port: number = 3000;
    const mongoUrl: string = "mongodb://127.0.0.1:27017";
    let mongoClient: mongo.MongoClient = new MongoClient(mongoUrl);
/*
    interface übersichtEvent{
        Gefriergut: string;
        Ablaufdatum: Date;
    }
 */   
    interface detailEvent{
        gefriergut: string;
        ablaufdatum: string;
        notiz: string;
        anlegedatum: Date;
        kategorie: string;
    }

    interface MongoGefrierschrank {
        _id: ObjectId;
        gefriergut: string;
        ablaufdatum: string;
        notiz: string;
        anlegedatum: Date;
        kategorie: string;
    }

    async function dbFind(db: string, collection: string, response: http.ServerResponse): Promise<void> {

        mongoClient.connect();


        let result = await mongoClient
            .db(db)
            .collection(collection)
            .find()
            .toArray();

        response.setHeader("Content-Type", "application/json");
        console.log(JSON.stringify(result))
        response.write(JSON.stringify(result));
    }

    async function add(request: http.IncomingMessage, response: http.ServerResponse): Promise<void> {

        let jsonString: string = "";


        request.on("data", (event) => {

            jsonString += event;

        });

        request.on("end", async () => {

            //let inputÜbersicht: übersichtEvent = JSON.parse(jsonString);
            let inputDetail: detailEvent = JSON.parse(jsonString);
            let MongoGefrierschrank: MongoGefrierschrank = {
                _id: new ObjectId(), gefriergut: inputDetail.gefriergut, ablaufdatum: inputDetail.ablaufdatum, notiz: inputDetail.notiz, anlegedatum: inputDetail.anlegedatum, kategorie: inputDetail.kategorie
            };

            console.log("incomingevent: ", jsonString);


            await post(MongoGefrierschrank);

            
            response.statusCode = 200;
            response.end();
            
        });

    }


    async function post(event: MongoGefrierschrank): Promise<void> {
        const result = await mongoClient.connect();
        console.log(result);
        

        await mongoClient.db("Gefrierschrank").collection("Gefriergut").replaceOne({
            _id: event._id
        },
            event,{upsert: true}
        );


        await mongoClient.close();
    }

    const server: http.Server = http.createServer();
    server.addListener("request", handleRequest);


    async function handleRequest(request: http.IncomingMessage, response: http.ServerResponse): Promise<void> {
        response.statusCode = 200;

        response.setHeader("content-type", "text/html; charset=utf-8");
        response.setHeader("Access-Control-Allow-Origin", "*");

        let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

        switch (url.pathname) {
            case "/Gefrierschrank": {
                await mongoClient.connect();
                switch (request.method) {
                    case "GET":
                        await dbFind(
                            "Gefrierschrank",
                            "Gefriergut",
                            response
                        );
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

}