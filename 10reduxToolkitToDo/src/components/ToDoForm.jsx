import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo, setTodo, setUpdateMessage, setUpdateStatus, saveThemeMode } from '../features/todo/todoSlice';
import '../index.css'

function ToDoForm() {

    const updateStatus = useSelector(state => state.updateStatus);
    const updateMessage = useSelector(state => state.updateMessage);
    const themeMode = useSelector(state => state.themeMode);
    
    const todos = useSelector(state => state.todos);
    
    const [note,setNote] = useState('');
    const dispatch = useDispatch();

    const addToDo = (e) => {
        e.preventDefault();
        if(note === '') return;

        if(!updateStatus) dispatch(addTodo(note));
        else{
            dispatch(updateTodo(note))
        }
        setNote('');
    };

    useEffect(() => {
        dispatch(setUpdateMessage(note));
    },[note]);

    useEffect(() => {
        setNote(updateMessage);
    }, [updateStatus]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        const savedUpdateMessage = JSON.parse(localStorage.getItem('savedUpdateMessage'));
        const savedUpdateStatus = JSON.parse(localStorage.getItem('savedUpdateStatus'));
        const savedThemeMode = JSON.parse(localStorage.getItem('savedThemeMode'));
        const savedNote = JSON.parse(localStorage.getItem('savedNote'));

        if(todos && todos.length > 0) dispatch(setTodo(todos));
        if(savedUpdateMessage) dispatch(setUpdateMessage(savedUpdateMessage));
        if(savedUpdateStatus) dispatch(setUpdateStatus(savedUpdateStatus));
        if(savedThemeMode) dispatch(saveThemeMode(savedThemeMode));
        if(savedNote) setNote(savedNote);
    },[]);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
        localStorage.setItem('savedUpdateStatus',JSON.stringify(updateStatus));
        localStorage.setItem('savedUpdateMessage',JSON.stringify(updateMessage));
        localStorage.setItem('savedThemeMode',JSON.stringify(themeMode));
        localStorage.setItem('savedNote',JSON.stringify(note));
    }, [todos,themeMode,updateMessage,note]);

    return (
        <div className='mt-10 w-full h-auto flex flex-wrap justify-center mx-3'>
            <form onSubmit={addToDo} className='... flex flex-wrap justify-center items-center'>

                <textarea 
                type="text" 
                className='h-[3rem] flex flex-wrap overflow-y-hidden my-3 w-[20rem] md:w-[30rem] p-2 rounded-xl bg-stone-100 border-4 outline-none border-orange-300 dark:border-orange-500 border-solid placeholder-gray-400 cursor-pointer' placeholder='write note'
                value={note}
                onChange={(e) => setNote(e.target.value)}
                />

                <button type="submit" className="relative inline-flex items-center justify-center ml-2 p-4 px-5 py-3 
                    overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-[4rem] h-[3rem] mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white"> {updateStatus ? "Update" : "Add"} </span>
                </button>

                

            </form>
        </div>
    )
}

export default ToDoForm
