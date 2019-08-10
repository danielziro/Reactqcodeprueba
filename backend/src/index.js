//Cargo Variables de entorno
require('dotenv').config();
//ejecucion de servidor
  
    const app = require('./app');
    require('./database');

    //inciniar servidor
    async function main(){
        await app.listen(app.get('port'));
        console.log('server on port',app.get('port'));
}

main();