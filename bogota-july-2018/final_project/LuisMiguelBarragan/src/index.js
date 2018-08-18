import express from 'express';
import morgan from 'morgan';
import path from 'path';

import task from './routes/task.routes.js';
import product from './routes/product.routes.js';

import { mongoose } from './database.js';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks' ,task);
app.use('/api/products' ,product);

//Static files
app.use(express.static( 'dist'));
app.use(express.static(__dirname + '/img/'));

//Starting server
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
});

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});