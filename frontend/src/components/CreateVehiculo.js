import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateVehiculo extends Component {
    state={
        users:[],
        userselected:'',
        empleado:'',
        marca:'',
        placa:'',
        modelo:'',
        propietarioName:'',
        documentoPro:'',
        costo:'',
        descripcion:'',
        date:new Date(),
        editing: false,
        _id:''
    }

  async  componentDidMount(){
     const res = await  axios.get('http://localhost:4000/api/users/');
     this.setState({users: res.data.map(user=> user.username),
     userselected: res.data.username
    })
    if(this.props.match.params.id){
        const res= await axios.get("http://localhost:4000/api/vehiculos/"+ this.props.match.params.id   );
        this.setState({
            userselected: res.data.empleado, 
            marca: res.data.marca,
            placa: res.data.placa,
            modelo:res.data.modelo,
            propietarioName:res.data.propietarioName,
            documentoPro :res.data.documentoPro,
            descripcion: res.data.descripcion,
            date: new Date(),
            editing:true,
            _id: this.props.match.params.id
        })

    }

    }

    onSubmit=async(e)=>{
        e.preventDefault();
        const newVehiculo={
            empleado:this.state.userselected,
            marca:this.state.marca,
            placa:this.state.placa,
            modelo:this.state.modelo,
            propietarioName:this.state.propietarioName,
            documentoPro:this.state.documentoPro,
            descripcion:this.state.descripcion,
            date:this.state.date
            
        };
        if(this.state.editing){
            //modifica
            await  axios.put('http://localhost:4000/api/vehiculos/'+ this.state._id, newVehiculo);
        }else{
            //crea
            await  axios.post('http://localhost:4000/api/vehiculos', newVehiculo);
        }
        
        //const res=
       
        // console.log(res)
         window.location.href ='/';
       
    }

    onInputChange= e=>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    onChangeDate=date=>{
        this.setState({date});
    }

    render() {
        return (
            <div className="cold-md-6 offset-md-3 ">
                <div className="card card-body">
                    <h4>Crear vehiculos</h4>
                    
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="userSelected"
                           onChange={this.onInputChange} 
                           value={this.state.userselected}  
                        >{
                            this.state.users.map(user => 
                            <option key={user} value={user}>
                                {user}
                            </option>)
                        }
                        </select>
                        </div>

                        <div className="form-group">
                            <input
                            name="marca"
                            type="text" 
                            className="form-control" 
                            placeholder="Marca" 
                            onChange={this.onInputChange}
                            value={this.state.marca}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <input
                            name="placa"
                            type="text" 
                            className="form-control" 
                            placeholder="Placa" 
                            onChange={this.onInputChange}
                            value={this.state.placa}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <input
                            name="modelo"
                            type="text" 
                            className="form-control" 
                            placeholder="Modelo"
                            onChange={this.onInputChange} 
                            value={this.state.modelo}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <input
                            name="propietarioName"
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre del Propietario" 
                            onChange={this.onInputChange}
                            value={this.state.propietarioName}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <input
                            name="documentoPro"
                            type="Number" 
                            className="form-control" 
                            placeholder="Documento Propietario" 
                            onChange={this.onInputChange}
                            value={this.state.documentoPro}
                            required
                            />
                        </div>
    


                        <div className="form-group">
                        <textarea
                            name="descripcion"
                            className="form-control"
                            placeholder="Descripcion"
                            onChange={this.onInputChange}
                            value={this.state.descripcion}
                            required
                        />
                        </div>

                        <div className="form-group">
                        <DatePicker 
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                        </div>

                        <div className="col-sm-4">
                        <input 
                        name="filename"
                        className="form-control " type="file"
                            multiple />
                    </div>
                        
                        
                    <form onSubmit={this.onSubmit}>
                     <button type="submit" className="btn btn-primary">
                        guardar
                     </button>
                    </form>
                </div>
                    
                </div>
            
        )
    }
}
