const express=require('express');
const morgan=require('morgan');
const path=require('path');

const app=express();

//settings
app.set('port', 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes'));

//public
app.use(express.static(path.join(__dirname,'public')));

//server port
app.listen(app.get('port'),()=>{
    console.log('\nSERVIDOR ESCUCHANDO EN EL PUERTO '+app.get('port')+'\n');
})