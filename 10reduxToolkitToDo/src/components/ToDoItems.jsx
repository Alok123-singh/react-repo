import React, { useEffect, useState } from 'react'
import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo, setUpdateMessage, setUpdateStatus, toggleExpand } from '../features/todo/todoSlice'

function ToDoItems() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return (
        <div className='mt-[3rem]'>
            {todos.map((todo) => 
            <div key={todo.id} className='mb-10 flex items-center'>

              <input 
              type="checkbox" 
              id={todo.id} 
              className="peer hidden" 
              onChange={() => dispatch(toggleTodo(todo.id))}
              checked={todo.completed}
              />
              <label htmlFor={todo.id} className="select-none cursor-pointer rounded-lg border-2 border-gray-800
              py-1 px-1 font-bold text-black transition-colors duration-200 ease-in-out bg-white peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-gray-200 
              hover:bg-gray-400"
              > Check me </label>

              <textarea
                    type='text'
                    className={`w-[43rem] ${todo.expand ? "h-auto" : "h-[3rem]"} rounded-xl ${todo.completed ? "bg-green-400 dark:bg-green-400 dark:text-rose-600"  : "bg-gray-200"} text-blue-700 font-bold dark:bg-gray-200 dark:text-emerald-800 p-2 pt-[0.82rem] mx-3 outline-none overflow-y-scroll
                    border-2 border-purple-800 cursor-default flux `}
                    value={todo.text}
                    readOnly={true}
              />
              
              <button 
              type='button'
              className="relative inline-block px-4 py-2 font-medium group"
              onClick={() => dispatch(toggleExpand(todo.id))}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Expand</span>
              </button>
              
              <button 
              className="flex p-2.5 border-2 border-yellow-100 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 rounded-xl hover:rounded-3xl dark:hover:bg-yellow-600 transition-all duration-300 text-white ml-3"
              onClick={() => {
                if(todo.completed){
                    alert('Todo already completed !');
                    return;
                }
                
                dispatch(setUpdateStatus(true));
                dispatch(setUpdateMessage(todo.text));
                dispatch(removeTodo(todo.id));
              }}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
              </button>
              
              <button 
              type='button' 
              className=" border-2 border-red-100 bg-rose-500 hover:bg-rose-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
              onClick={() => dispatch(removeTodo(todo.id))}
              >
                  Delete <span className="ml-2">&#128465;</span>
              </button>

            </div>
         )}
        </div>
    )
}

export default ToDoItems