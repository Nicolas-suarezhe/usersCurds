import React from 'react';
import { BiEnvelopeOpen } from "react-icons/bi";
import { BiUserX } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { BiCheckShield } from 'react-icons/bi';
import { BiCake } from 'react-icons/bi';


const UsersList = ({usersList, selectUser, deleteUser}) => {



    return (
        <div className='user-info'>
            {usersList.map(user =>(
                <li key={user.id} 
                className='list-element'>
                        <b>
                            {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
                        </b> 
                    <div>
                    <BiEnvelopeOpen/> {user.email}
                    </div>
                    <div>
                    <BiCheckShield/> {user.password}
                    </div>
                    <div>
                    <BiCake/> {user.birthday}
                    </div>
                    <BiPencil 
                    className='select-button'
                    onClick={()=> selectUser(user)} 
                    />
                    <BiUserX
                    className='select-button'
                    onClick={()=> deleteUser(user)}
                    />
                </li>
            ))}
        </div>
    );
};

export default UsersList;