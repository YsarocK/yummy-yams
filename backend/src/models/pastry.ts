import { Schema, model } from 'mongoose';
import { Document } from 'mongoose';

export interface IPastry extends Document {
  name: string;
  image: string;
  stock: number;
  quantityWon: number;
}

const pastrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  quantityWon: {
    type: Number,
    required: true
  }
});

const Pastry = model<IPastry>('Pastry', pastrySchema);

export default Pastry;
