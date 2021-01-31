import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos, 
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + " " + datos.apellido)
    }

    return (
        <Fragment>
            <h3>Formulario</h3>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese Nombre"  
                        className="form-control"      
                        type="text"  
                        name="nombre"
                        onChange={handleInputChange}          
                    />
                </div>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese Apellido"
                        className="form-control"  
                        type="text" 
                        name="apellido"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit"
                    >Enviar</button>
                </div>
                
            </form>
            <h5>Datos ingresados: {datos.nombre} - {datos.apellido}</h5>
        </Fragment>

    );
}

export default Formulario;