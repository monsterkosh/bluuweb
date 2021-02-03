import React from 'react'
import Formulario from "./Formulario"
import EjemploUno from './EjemploUno';
import Comentario from './Comentario'

const Formularios = () => {

    const sujeto = {
        nombre: 'Pedrito',
        urlImagen: 'https://via.placeholder.com/64',
        texto: 'Lorem ipsum'
      }

    return ( 
        <div>
            <h1>Formularios</h1>
            <Formulario />
            <EjemploUno />
            <Comentario sujeto={sujeto}/>
        </div>

     );
}
 
export default Formularios;