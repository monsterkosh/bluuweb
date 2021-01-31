import React from 'react'
import Contador from "./Contador"
import Lista from "./Lista"


const Contadores = () => {

      return (
        <div className="container">
          <h1>Contadores</h1>
          <Contador />
          <Lista />
        </div>
      );
    }

 
export default Contadores;