import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToMongo() {
  mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('MongoDB successfully connected!'))
    .catch((error) => console.log('Error connecting to MongoDB\n', error));
}

export default connectToMongo;