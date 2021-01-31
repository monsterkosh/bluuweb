import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h3>Comentario</h3>
            <hr></hr>
            <div className='media'></div>

            <Avatar urlImagen={sujeto.urlImagen} />
            
            <div className='media-body'>
                <h5 className='mt-0'>{sujeto.nombre}</h5>
                {sujeto.texto}

            </div>
            <hr></hr>
            
        </Fragment>

     );
}
 
export default Comentario;

