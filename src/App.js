import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Ageapi from './components/Ageapi';
import User from './components/User';
import Crud from './components/Crud'
import Contadores from './components/Contadores'
import Formularios from './components/Formularios'


function App() {
  return (
    <Router>
      <div className="container mt-3">
        <div className='btn-group'>
          <Link to='/' className='btn btn-dark'> 
            Inicio
          </Link>
          <Link to='/Contadores' className='btn btn-dark'> 
            Contadores
          </Link>
          <Link to='/Formularios' className='btn btn-dark'> 
            Formularios
          </Link>
          <Link to='/Ageapi' className='btn btn-dark'> 
            Router API Fetch
          </Link>
          <Link to='/Crud' className='btn btn-dark'> 
            CRUD
          </Link>
          <NavLink to='/contacto' className='btn btn-dark' activeClassName='active'> 
            Contacto
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path='/Ageapi/:id'>
            <User />
          </Route>              
          <Route path='/' exact>
            <Inicio />
          </Route>     
          <Route path='/contacto'>
            <Contacto />
          </Route>      
          <Route path='/Ageapi'>
            <Ageapi />
          </Route>     
          <Route path='/Crud'>
            <Crud />
          </Route>  
          <Route path='/Contadores'>
            <Contadores />
          </Route>  
          <Route path='/Formularios'>
            <Formularios />
          </Route>  

        </Switch>
      </div>
    </Router>
  );
}

export default App;
