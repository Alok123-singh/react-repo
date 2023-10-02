import { createContext, useContext } from "react";

const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo : 'ToDo Message',
            completed: false
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id, todo) => {},
    deleteToDo: (id) => {},
    toggleToDo: (id) => {},
    themeMode : "dark",
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ToDoContextProvider = ToDoContext.Provider;

export const useToDo = () => {
    return useContext(ToDoContext);
}
