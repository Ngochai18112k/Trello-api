import { MongoClient } from "mongodb";
import { env } from "*/config/environment";

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try {
        //connect the client to the server
        await client.connect();
        console.log("connected successfully!");

        //list databases
        await listDatabases(client);
    } finally {
        //Ensure that the client will close when finish/error
        await client.close();
    }
}

const listDatabases = async (client) => {
    const databaseList = await client.db().admin().listDatabases();
    console.log(databaseList);
    console.log('Your databases: ');
    databaseList.databases.forEach(db => console.log(` - ${db.name}`));
}
