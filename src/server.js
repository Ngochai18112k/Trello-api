import express from 'express';
import { connectDB } from '*/config/mongodb';
import { env } from '*/config/environment';

connectDB()
    .then(() => console.log('Connected successfully!'))
    .then(() => bootServer())
    .catch(error => {
        console.log(error)
        process.exit()
    });

const bootServer = () => {
    const app = express();

    app.get('/', (req, res) => {
        res.end('<h1>Hello</h1><hr/>');
    })

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log(`Hello ngochaidev, I'm running at ${env.APP_HOST}:${env.APP_PORT}/`);
    })
}