import mongoose from 'mongoose';
import product from "./models/product.js";
import { products } from './data.js';


const URI = 'mongodb://localhost/hus-protein';

const conexion = mongoose.connect(URI)
    .then(db => {
        console.log('DB is connected');
        //product.insertMany(products);
    })
    .catch(err => console.error(err));

export default mongoose;