import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: nanoid(), text: "Start using todo !", completed : false, expand: false}],
    updateMessage : '',
    updateStatus : false,
    themeMode : 'light'
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos.unshift(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            };
            state.todos.unshift(todo);
            state.updateMessage = '';
            state.updateStatus = false;
        },
        toggleTodo : (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        },
        setUpdateMessage : (state,action) => {
            state.updateMessage = action.payload;
        },
        setUpdateStatus : (state,action) => {
            state.updateStatus = action.payload;
        },
        setTodo : (state,action) => {
            state.todos = action.payload;
        },
        toggleTheme : (state,action) => {
            state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark';
        },
        saveThemeMode : (state,action) => {
            state.themeMode = action.payload;
        },
        toggleExpand: (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, expand : !todo.expand} : todo);
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleTodo, setUpdateMessage, setUpdateStatus, setTodo, toggleTheme, saveThemeMode, toggleExpand} = todoSlice.actions

export default todoSlice.reducer