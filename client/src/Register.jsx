import React, { useState } from 'react';
import axios from "axios"

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const registerUser=(e)=>{
        e.preventDefault();
        const data={email,password};
        axios.post('',data)
    }
  return (
    <form action="" onSubmit={e=>registerUser(e)}>
        <input type="email" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <br />
        <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
        <br />
        <button type='submit'>register</button>
    </form>
  )
}

export default Register;
