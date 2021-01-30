import React, { Fragment } from 'react';


const Jsx = () => {

    const temperatura = 21;


    return ( 
        <Fragment>
        <h3>Frio o calor ?</h3>
        <h5>
            {
                temperatura > 20 ? "Calor" : "Frio"
            }
        </h5>
        </Fragment>
     );
}
 
export default Jsx;