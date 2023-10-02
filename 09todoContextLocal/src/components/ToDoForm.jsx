import React, { useState } from 'react'
import '../index.css'
import { useToDo } from '../context/ToDoContext'

function ToDoForm() {

    const [todoMsg,setToDoMsg] = useState('');

    const {addToDo} = useToDo();

    const add = (e) => {
        e.preventDefault();
        if(!todoMsg){
            alert('Recieved empty ToDo task !');
            return;
        }

        addToDo({todo: todoMsg, completed : false});
        setToDoMsg('');
    }

    return (
        <div className='... flex justify-center items-center text-black mt-5 mb-10 pb-2'>
            <form onSubmit={(e) => add(e)}>
                <input 
                type='text' 
                className='w-[30rem] h-[2rem] cursor-pointer rounded-lg text-center border-solid border border-blue-900 dark:bg-emerald-400 placeholder-black' placeholder='write some task' 
                value={todoMsg}
                onChange={(e) => setToDoMsg(e.target.value)}
                />
                <button 
                className='w-[4rem] h-[2rem] bg-blue-600 hover:bg-purple-500 dark:hover:bg-blue-500 ml-2 rounded-lg text-white text-center border-solid border-2 border-blue-900' 
                type='submit'
                > 
                    Add 
                </button>
            </form>
        </div>
    )
}

export default ToDoForm
