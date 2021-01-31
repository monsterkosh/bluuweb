import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);

    const [numero, setNumero] = useState(5)

    const agregaElemento = () => {
        setNumero(numero +1)
        setArrayNumero([...arrayNumero, numero])
    }

    return (
        <Fragment>
        <h3>Lista</h3>
        <button onClick={agregaElemento}>Agregar</button>

        <ul>
        {
            arrayNumero.map((item, index) => 
                <li key={index}>item: {item} - index: {index}</li>
            )
        }
        </ul>
        </Fragment>    
    );
}

export default Lista;