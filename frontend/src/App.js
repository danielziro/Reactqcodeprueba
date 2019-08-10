import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';


import VehiculosList from './components/VehiculosList';
import CreateUser from './components/CreateUser';
import CreateVehiculo from './components/CreateVehiculo';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
     <Router>
       <Navigation/>
     <div className="container p-4">
     <Route path="/" exact component={VehiculosList}/>
       <Route path="/edit/:id" exact component={CreateVehiculo}/>
       <Route path="/create" exact component={CreateVehiculo}/>
       <Route path="/user" exact component={CreateUser}/>
     </div>
     
     </Router>
     
    </div>
  );
}

export default App;
