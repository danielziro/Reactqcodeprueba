const vehiculoCtrl={};

const vehiculo=require('../models/vehiculo');

vehiculoCtrl.getVehiculos = async(req,res) =>{
    const vehiculos = await vehiculo.find();
    res.json(vehiculos)
}
vehiculoCtrl.createVehiculos = async(req,res) => {
const {empleado,marca,placa,modelo,costo,propietarioName,documentoPro,fechaIngreso,descripcion} = req.body
    const newVehiculo = new vehiculo({
        empleado,
        marca,
        placa,
        modelo,
        costo,
        propietarioName,
        documentoPro,
        fechaIngreso,
        descripcion,

    });
    //await console.log(newVehiculo);
    await newVehiculo.save();
    res.json({message:'Se Registro el vehiculo'})
}
vehiculoCtrl.getvehiculo= async(req,res) => {
  const Vehiculo=  await vehiculo.findById(req.params.id);
    //console.log(Vehiculo)
    res.json({Vehiculo})
}

vehiculoCtrl.updatevehiculo= async (req,res)=>{
    const{  empleado, marca,placa, modelo, propietarioName, documentoPro,fechaIngreso,descripcion,}=req.body;
      await vehiculo.findOneAndUpdate({_id: req.params.id},
        {  empleado,
            marca,
            placa,
            modelo,
            propietarioName,
            documentoPro,
            fechaIngreso,
            descripcion,
        })
    res.json({message:'Informacion actualizada'})
}

vehiculoCtrl.deletevehiculo= async (req,res) => {
    await vehiculo.findByIdAndDelete(req.params.id);
    res.json({message:'Vehiculo Eliminado'})
};

module.exports =vehiculoCtrl;