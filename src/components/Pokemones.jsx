import React from 'react'

import {useDispatch, useSelector} from 'react-redux';
import {obtenerPokemonesAccion, siguientePokemonAcccion} from '../redux/pokeDuks'

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)


    return ( 
        <div>
            <h1>Redux and Axios API Fetch</h1>
            <h3>Pokemons</h3>
            <p>Esto es una lista de una API publica</p>
            
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
            {
                <ul>
                    {
                        pokemones.map(item => (
                            <li key={item.name}>{item.name}</li>
                        ))
                    }
                </ul>
            }

            <button onClick={() => dispatch(siguientePokemonAcccion(20))}>Siguiente</button>

        </div>
     );
}
 
export default Pokemones;