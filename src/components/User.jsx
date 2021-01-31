import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const {id} = useParams()
    console.log(id)

    const [pueblo, setPueblo] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            setPueblo(users)
        }

        obtenerDatos()
    }, [id])



    return ( 
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.army_type}</p>
            <p>{pueblo.team_bonus}</p>
            <p>{pueblo.civilization_bonus}</p>
        </div>
     );
}
 
export default User;