import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
//import moduleName from 'react-router-dom'
import { Link } from 'react-router-dom'




export default class VehiculosList extends Component {
    state={
        vehiculos:[]
    }
   
  async  componentDidMount(){ 
      this.getVehiculos();
    }

    async getVehiculos(){
        const res= await axios.get('http://localhost:4000/api/vehiculos');
        this.setState({vehiculos: res.data});
    }
      deletevehiculo= async(_id)=>{
        await axios.delete('http://localhost:4000/api/vehiculos/'+ _id)
        this.getVehiculos();
      }
    render() {
        return (
            <div className="row">
             {
                this.state.vehiculos.map(vehiculo=>(
                    <div className="cold-md-4 p-2" key={vehiculo._id}> 
                        <div className="card">
                        <div className="card-header d-flex justify-content-between">
                                <h5>{vehiculo.placa}</h5>
                                <Link className="btn btn-secondary"to={"/edit/"+vehiculo._id}>
                                editar
                                </Link>
                            </div>
                        <div className="card-body">
                                <p>{vehiculo.marca}</p> 
                                <p>{vehiculo.modelo}</p>
                                <p>{vehiculo.costo}</p>
                                <p>{vehiculo.propietarioName}</p>   
                                <p>{vehiculo.documentoPro}</p>
                                <p>{vehiculo.descripcion}</p>
                                <p>{format(vehiculo.date)}</p>
                            </div>
                            <div className="card-footer">
                                    <button className="btn btn-danger" onClick={()=>this.deletevehiculo(vehiculo._id)}>
                                        Eliminar
                                     </button>
                                            
                            </div>
                        </div>
                    </div> 
                ))
             }
             
            </div>
        )
    }
}
