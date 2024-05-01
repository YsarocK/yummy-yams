import express from 'express';
import dataImport from './utils/dataImport.js';

const app = express();
const port = 8080;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

dataImport();