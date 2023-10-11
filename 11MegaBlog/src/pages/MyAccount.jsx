import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MyAccount() {

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');

    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        setEmail(userData.email);
        setName(userData.name);

    }, []);


    return (
        <div
        className='h-[22rem] md:h-[15rem] py-4 w-full flex flex-wrap justify-evenly items-center dark:bg-slate-600 dark:text-gray-300'
        >
            <div className='flex m-3 md:m-0 flex-col justify-center items-center'>
                <input type="email" value={email} disabled={true} className='font-medium text-center rounded-md bg-blue-500 outline-none w-[15rem] h-[2.5rem]' />
                <div className='bg-yellow-400 m-2 p-2 rounded-xl w-[9rem] h-[2rem] flex justify-center items-center dark:text-gray-600 font-bold outline-black' onClick={() => navigate('/update-email')} >Update Email</div>
            </div>
            
            <div className='flex flex-col m-6 md:m-0 justify-center items-center'>
                <input type="text" value={name} disabled={true} className='font-medium text-center rounded-md bg-blue-500 outline-none w-[15rem] h-[2.5rem]' />
                <div className='bg-yellow-400 m-2 p-2 rounded-xl w-[10rem] h-[2rem] flex justify-center items-center dark:text-gray-600 font-bold outline-black' onClick={() => navigate('/update-username')} >Update Username</div>
            </div>

            <div className='bg-yellow-400 m-4 md:m-2 p-2 rounded-xl w-[10rem] h-[2rem] flex justify-center items-center dark:text-gray-600 font-bold outline-black' onClick={() => navigate('/update-password')} >Update Password</div>
        </div>
    )
}

export default MyAccount