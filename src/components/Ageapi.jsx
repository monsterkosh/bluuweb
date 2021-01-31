import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const Ageapi = () => {

    

    const [equipo, setEquipo] = React.useState([])

    useEffect(() => {
        console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        setEquipo(users.civilizations)
    }


    return ( 
        <div>
            <h1>Router API fetch</h1>
            <h3>Age of Empires II Civilizations</h3>
            <p> Esto es una lista tomada de una API publica</p>

            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/Ageapi/${item.id}`}>
                            {item.name} - {item.expansion}
                            
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Ageapi;
