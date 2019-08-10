const {Schema, model} = require('mongoose');

const VehiculoSchema= new Schema({
    empleado:String,
    marca:String,
    placa:String,
    modelo:Number,
    costo:{type:Number,
        default:200000},
    propietarioName:String,
    documentoPro:Number,
    fechaIngreso:{type:Date,
        default:Date.now
    },
    descripcion:String,
},
{
    timestamps: true
});

module.exports= model('vehiculo', VehiculoSchema);