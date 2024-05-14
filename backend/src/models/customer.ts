import { Schema, model } from 'mongoose';
import { Document } from 'mongoose';

export interface ICustomer extends Document {
  email: string;
  firstName: string;
  lastName: string;
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
  }
});

const Customer = model<ICustomer>('Customer', customerSchema);

export default Customer;
