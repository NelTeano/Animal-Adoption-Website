
import MongoosePackage from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const mongoose = MongoosePackage;


mongoose.connect(process.env.VITE_DATABASE_URI, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('CONNECTED TO THE DATABASE'))


export default mongoose;







