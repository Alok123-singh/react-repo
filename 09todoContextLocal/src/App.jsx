import { useEffect, useState } from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'
import { ToDoContextProvider } from './context/ToDoContext'
import './index.css'
import ThemeButton from './components/ThemeButton'
import Pic from './assets/image1.jpg'

function App() {
  
  const [todos, setToDos] = useState([]);
  const [themeMode, setThemeMode] = useState('dark');

  const addToDo = (todo) => {
    setToDos((prevToDo) => [{id: Date.now(), ...todo}, ...prevToDo] );
  }

  const updateToDo = (id,todo) => {
    setToDos((prevToDo) => prevToDo.map((prev) => prev.id === id ? todo : prev ));
  }

  const deleteToDo = (id) => {
    setToDos((prevToDo) => prevToDo.filter((prev) => prev.id !== id));
  }

  const toggleToDo = (id) => {
    setToDos((prevToDo) => prevToDo.map((prev) => prev.id === id ? {...prev, completed: !prev.completed} : prev ) );
  }

  const lightTheme = () => {
    setThemeMode('light');
  }

  const darkTheme = () => {
    setThemeMode('dark');
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setToDos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light','dark');
    html.classList.add(themeMode);
  }, [themeMode])

  return (
    <ToDoContextProvider value={{todos, addToDo, updateToDo, deleteToDo, toggleToDo, themeMode, lightTheme, darkTheme}}>

      <div className='... h-[32.6rem] w-[50rem] flex flex-col items-center mt-5 mb-5 outline-double rounded-lg bg-cover overflow-auto' style={{backgroundImage: `url(${Pic})`}}>

          <div className='... mt-3'>
            <ThemeButton />
          </div>

          <div>
            <ToDoForm />
          </div>
          
          {todos.map((todo) => (
            <div key={todo.id}>
              <ToDoItem todo = {todo} />
            </div>
          ))}

      </div>

    </ToDoContextProvider>
  )
}

export default App
