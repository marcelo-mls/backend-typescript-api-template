import dotenv from 'dotenv';
import connectToMongo from './database/mongoConnection';
import app from './app';

dotenv.config();
connectToMongo();

const PORT = 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));