import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(()=>{
    axios.get('http://144.126.218.162:9000/users/')
      .then(res=> setUsersList(res.data))
  },[])

  const getUsers = ()=>{
    axios.get('http://144.126.218.162:9000/users/')
      .then(res=> setUsersList(res.data))
  }

  const selectUser= (user)=>{
    setUserSelected(user)
  }
  const deleteUser= (userSelected)=>{
    axios.delete(`http://144.126.218.162:9000/users/${userSelected.id}/`)
    .then(()=> getUsers())
    .catch(error=> console.log(error.response.data))
  }

  return (
    <div className="app">
      <div className='users-list-form' >  
        <UsersForm 
        userSelected={userSelected} 
        getUsers={getUsers}
        ></UsersForm>
        <UsersList 
        selectUser={selectUser}
        deleteUser={deleteUser} 
        usersList={usersList}
        ></UsersList>
      </div>
    </div>
  )
}

export default App
