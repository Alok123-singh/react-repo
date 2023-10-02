import React, { useState } from 'react'
import { useToDo } from '../context/ToDoContext';

function ToDoItem({ todo }) {

    const [isEditable, setIsEditable] = useState(false);
    const {updateToDo,deleteToDo,toggleToDo} = useToDo();
    const [updatedMsg, setUpdatedMsg] = useState(todo.todo);


    return (
        <div className='flex justify-center items-center mb-6'>
            <input 
            type="checkbox" 
            className='h-[1.2rem] w-[1.2rem] inline-flex rounded-3xl cursor-pointer text-center' 
            checked = {todo.completed === true}
            onChange={() => toggleToDo(todo.id)}
            />

            <input 
            type='text' 
            className={`w-[31.4rem] h-[2rem] rounded-lg text-center cursor-default bg-white dark:bg-slate-300   ml-1 ${isEditable ? "border-solid border border-black outline-double" : "outline-none"}
                ${todo.completed ? "line-through" : "" }`}
            value={updatedMsg}
            onChange={(e) => setUpdatedMsg(e.target.value)}
            readOnly={!isEditable}
            />

            <button 
                type="button"
                className='... w-[2rem] h-[2rem] rounded-lg text-center border-solid border border-blue-900 bg-white dark:bg-green-600 dark:hover:bg-green-400 ml-1'
                onClick={() => {
                    if(updatedMsg === '') return;
                    if(todo.completed === true){
                        alert('Completed tasks can not be edited !');
                        return;
                    }
                    
                    if(isEditable){
                        updateToDo(todo.id,{...todo, todo: updatedMsg});
                        setIsEditable(false);
                    }
                    else{
                        setIsEditable((prev) => !prev);
                    }
                }}
            >
                { isEditable === true ? "📁" : "✏️" }
            </button>

            <button 
                type="button"
                className='... w-[2rem] h-[2rem] rounded-lg text-center border-solid border border-blue-900 bg-white dark:bg-red-300 dark:hover:bg-red-200 ml-1'
                onClick={() => deleteToDo(todo.id)}
                disabled={todo.completed}
            >
                ❌
            </button>

        </div>
    )
}

export default ToDoItem
