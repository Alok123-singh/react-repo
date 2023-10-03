import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from '../features/todo/todoSlice.js'

export const store = configureStore({
    reducer: toDoReducer
});
