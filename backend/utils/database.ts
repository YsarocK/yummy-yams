import { connect } from 'mongoose';

const connectToDatabase = async () => {
    try {
        await connect('mongodb://mongodb:27017/mongo-test');
        console.log('Successfully connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

export default connectToDatabase;
