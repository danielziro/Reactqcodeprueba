//conexion a base de datos mongodb
    const mongoose = require('mongoose');
//creo base de datos y conexion
    console.log(process.env.MONGODB_URI);
    const URI=process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb+srv://admin:123@cluster0-pefyc.mongodb.net/test?retryWrites=true&w=majority';

    mongoose.connect(URI,{
 //  valido datos de coneccion 
    useNewUrlParser:true,
    useCreateIndex: true,  
});

    const  connection = mongoose.connection;
    connection.once('open',()=>{
        console.log('db conectada');
    });
