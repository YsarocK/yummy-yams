import fs from 'fs';
import mongoose from 'mongoose';
import connectToDatabase from './database.js';

const importData = async () => {
    // Call the connectToDatabase function to establish connection
    await connectToDatabase();

    const pastrySchema = new mongoose.Schema({
        name: String,
        image: String,
        stock: Number,
        quantityWon: Number
    });

    const Pastry = mongoose.model('Pastry', pastrySchema);

    try {
        // Create the "pastries" collection
        await Pastry.createCollection();
        console.log('Pastries collection created successfully');

        // Read the JSON file
        const jsonData = fs.readFileSync('pastries.json', 'utf8');

        // Parse JSON data
        const pastriesData = JSON.parse(jsonData);

        // Insert data into the "pastries" collection
        await Pastry.insertMany(pastriesData);
        console.log('Pastries data imported successfully');
    } catch (err) {
        console.error('Error importing pastries data:', err);
        process.exit(1);
    }
};

export default importData;
