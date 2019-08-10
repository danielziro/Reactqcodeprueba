//defino ruta de vehiculos
const { Router }=require('express');
const router = Router();
const {getVehiculos,createVehiculos,updatevehiculo,getvehiculo,deletevehiculo}=require('../controllers/vehiculos.controller')




router.route('/')
    .get(getVehiculos)
    .post(createVehiculos);

router.route('/:id')
    .put(updatevehiculo)
    .get(getvehiculo)
    .delete(deletevehiculo)
module.exports= router;
