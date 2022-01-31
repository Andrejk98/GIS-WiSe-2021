import * as http from "http";
import * as mongo from "mongodb";
import { MongoClient, ObjectId } from "mongodb";



export namespace EventTabelle {

    const hostname: string = "127.0.0.1";
    const port: number = 3000;
    const mongoUrl: string = "mongodb://127.0.0.1:27017";
    let mongoClient: mongo.MongoClient = new MongoClient(mongoUrl);

    interface ConcertEvent {
        interpret: string;
        price: number;
    }

    interface MongoConcert {
        _id: ObjectId;
        interpret: string;
        price: number;
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

            let inputEvent: ConcertEvent = JSON.parse(jsonString);
            let MongoConcert: MongoConcert = {
                _id: new ObjectId(), interpret: inputEvent.interpret, price: inputEvent.price
            };

            console.log("incomingevent: ", jsonString);


            await post(MongoConcert);

            
            response.statusCode = 200;
            response.end();
            
        });

    }


    async function post(event: MongoConcert): Promise<void> {
        const result = await mongoClient.connect();
        console.log(result);
        

        await mongoClient.db("Concert").collection("Event").replaceOne({
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
            case "/concertEvent": {
                await mongoClient.connect();
                switch (request.method) {
                    case "GET":
                        await dbFind(
                            "Concert",
                            "Event",
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