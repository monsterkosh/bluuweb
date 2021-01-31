import React, {useState} from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

import { v4 as uuidv4 } from 'uuid';

const Crud = () => {

  const usersData = [
    { id: uuidv4(), name: 'Pedrito Martinez', username: 'PDM56' },
    { id: uuidv4(), name: 'Jose Hook', username: 'Joselopapa' },
    { id: uuidv4(), name: 'Ruben Ribera', username: 'RR9' },
  ]

  // state
  const [users, setUsers] = useState(usersData);

  // agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  // editar usuarios
const [editing, setEditing] = useState(false);

const [currentUser, setCurrentUser] = useState({
  id: null, name: '', username: ''
});

const editRow = (user) => {
  setEditing(true);
  setCurrentUser({
    id: user.id, name: user.name, username: user.username
  });
}

const updateUser = (id, updatedUser) => {
  setEditing(false);
  setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}




  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <h4>(also react-hook-form and uuid)</h4>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Editar usuarios</h2>
                <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) :
              <div>
                <h2>Agregar usuario</h2>
                <AddUserForm addUser={addUser}/>
              </div>
          }





        </div>
        <div className="flex-large">
          <h2>Usuarios activos</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default Crud;
