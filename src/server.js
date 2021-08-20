import express from 'express';
import { mapOrder } from '*/utilities/sorts.js';

const app = express();

const hostname = 'localhost';
const port = 4000;

app.get('/', (res, req) => {
    res.end('<h1>Hello</h1><hr/>');
})

app.listen(port, hostname, () => {
    console.log(`Hello ngochaidev, I'm running at ${hostname}:${port}/`)
})