import { Schema, model } from 'mongoose';
import { Document } from 'mongoose';

interface ICustomer extends Document {
  email: string;
  firstName: string;
  lastName: string;
  launchs: Array<{
    dices: number[],
    pastries: number,
    gain: Array<string>
  }>;
}

const customerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  launchs: {
    type: Array,
    required: true,
    default: []
  }
});

const Customer = model<ICustomer>('Customer', customerSchema);

export {
  Customer,
};

export type {
  ICustomer
}
