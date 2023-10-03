import { useSelector } from 'react-redux'
import ToDoForm from './components/ToDoForm'
import ToDoItems from './components/ToDoItems'
import './index.css'
import Pic from './assets/image5.jpg'
import ThemeButton from './components/ThemeButton'

function App() {

  const todos = useSelector(state => state.todos)

  return (
    <div>
      
      <div className='flex flex-row-reverse justify-start items-center mr-[6rem] mt-3'>
          <ThemeButton /> 
      </div>

      <div className='flex justify-center h-[32.2rem] w-[75rem] mt-3'>
          <div className='w-[72rem] h-[30rem] rounded-xl bg-green-600 flex flex-col items-center outline-double overflow-auto bg-cover' style={{backgroundImage: `url(${Pic})`}}>

            <ToDoForm />

            <ToDoItems />

          </div>

      </div>

    </div>
  )
}

export default App
