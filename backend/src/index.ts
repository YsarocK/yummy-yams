import express from 'express';
import bodyParser from 'body-parser';
import dataImport from '../utils/dataImport';
import connectToDatabase from '../utils/database';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customer';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const port = 8080;

dotenv.config();
// dataImport();

app.get('/', (req, res) => {
  res.send("What are you doin' here ?");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await connectToDatabase();
});

app.use('/api/customers', customerRoutes);