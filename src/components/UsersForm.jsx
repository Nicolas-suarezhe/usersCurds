import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const UsersForm = ({getUsers, userSelected}) => {

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    }

    const { handleSubmit, register, reset } = useForm()

    useEffect(()=>{
        if(userSelected){
            reset(userSelected)
        }else{
            reset(initialValues)
        }
    },[userSelected])
    
    const submit = (data) => {
        if(userSelected){
            axios.put(`http://144.126.218.162:9000/users/${userSelected.id}/`, data)
                .then(()=> 
                getUsers(),
                reset(initialValues)
                )
                .catch(error => console.log(error.response.data))
        }else{
            axios.post('http://144.126.218.162:9000/users/', data)
            .then(()=> getUsers())
            .catch(error=> console.log(error.response.data))
        }
    }


    return (
        <div>

            <form className='form' action="" onSubmit={handleSubmit(submit)}>
                <div className='input-container'>
                  <label className='labels' htmlFor="first_name">Name</label>
                  <input 
                    className='name-input input-space'
                    type="text" 
                    id='first_name'
                    {...register('first_name')} />
                </div>

                <div className='input-container'>
                  <label className='labels' htmlFor="last_name">Lastname</label>
                  <input 
                    className='lastname-input input-space'
                    type="text" 
                    id='last_name'
                    {...register('last_name')} />
                </div>

                <div className='input-container'>
                  <label className='labels' htmlFor="email">E-mail</label>
                  <input 
                    className='email-input input-space'
                    type="text" 
                    id='email'
                    {...register('email')} />
                </div>

                <div className='input-container'>
                  <label className='labels' htmlFor="password">Password</label>
                  <input 
                    className='password-input input-space'
                    type="text" 
                    id='password'
                    {...register('password')} />
                </div>

                
                <div className='input-container'>
                  <label className='labels' htmlFor="birthday">Birth day</label>
                  <input 
                    className='birthday-input input-space'
                    type="date" 
                    id='birthday'
                    {...register('birthday')} />
                </div>
                
                <button className='submit-button'>SUBMIT</button>
            </form>

        </div>
    );
};

export default UsersForm;