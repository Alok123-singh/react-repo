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
      
      <div className='flex flex-wrap flex-row-reverse justify-start items-center mr-[6rem] mt-3'>
          <ThemeButton /> 
      </div>

      <div className='flex flex-wrap h-auto w-full mt-3 mb-7'>
          <div className='md:w-auto mx-[1rem] md:mx-[3rem] h-auto lg:h-[29.4rem] rounded-xl bg-green-600 flex flex-wrap justify-center items-center outline-double overflow-auto bg-cover' style={{backgroundImage: `url(${Pic})`}}>

            <ToDoForm />

            <ToDoItems />

          </div>

      </div>

    </div>
  )
}

export default App
