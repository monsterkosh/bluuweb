import React, { useState, Fragment } from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero +1)
    }

    const reducir = () => {
        setNumero(numero -1)
    }


// Fragment es como usar un <div> padre
    return ( 
        <Fragment>
        <h3>Contador: {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={reducir}>Reductir</button>
        </Fragment>

     );
}
 
export default Contador;