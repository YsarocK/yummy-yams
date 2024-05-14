import fs from 'fs';
import { Pastry } from '../src/models';

const importData = async () => {
    try {
        await Pastry.createCollection();
        console.log('Pastries collection created successfully');

        const jsonData = fs.readFileSync('pastries.json', 'utf8');

        const pastriesData = JSON.parse(jsonData);

        await Pastry.insertMany(pastriesData);
        console.log('Pastries data imported successfully');
    } catch (err) {
        console.error('Error importing pastries data:', err);
        process.exit(1);
    }
};

export default importData;
