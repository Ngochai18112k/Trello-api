import { MongoClient } from "mongodb";
import { env } from "*/config/environment";

let dbInstance = null;

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    //connect the client to the server
    await client.connect();

    //Assign  clientDB to our dbInstance
    dbInstance = client.db(env.DATABASE_NAME);
}

//get Database Instance
export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to database first!');
    return dbInstance;
}
