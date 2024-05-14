import express from 'express';
import bodyParser from 'body-parser';
import { dataImport, connectToDatabase } from '../utils';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customer';
import dicesRoutes from './routes/dices';
import pastriesRoutes from './routes/pastries';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}))

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
app.use('/api/dices', dicesRoutes);
app.use('/api/pastries', pastriesRoutes);