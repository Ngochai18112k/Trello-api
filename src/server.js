import express from 'express';
import { connectDB } from '*/config/mongodb';
import { env } from "*/config/environment";

const app = express();

connectDB().catch(console.log());

app.get('/', (res, req) => {
    res.end('<h1>Hello</h1><hr/>');
})

app.listen(env.PORT, env.HOST, () => {
    console.log(`Hello ngochaidev, I'm running at ${env.HOST}:${env.PORT}/`)
})