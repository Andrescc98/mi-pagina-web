const express=require('express');
const morgan=require('morgan');

const app=express();

//settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes'));

//server port
app.listen(app.get('port'),()=>{
    console.log('\nSERVIDOR ESCUCHANDO EN EL PUERTO '+app.get('port')+'\n');
})