import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('olive');

  function makeRed(){
    setColor('#8a2d37');
  }

  return (
    <div style={{backgroundColor: color}} className='... w-screen h-screen'>
      <div className='... flex justify-around'>
        <div className='... bg-slate-400 rounded-xl h-20 mt-10 flex flex-wrap justify-evenly items-center '>
          <button onClick={makeRed} className='... bg-red-500 h-10 w-20 rounded-3xl ml-5 flex justify-center items-center'>Red</button>
          <button onClick={() => setColor('#414141')} className='... bg-gray-600 h-10 w-20 rounded-3xl ml-5 flex justify-center items-center'>Grey</button>
          <button onClick={() => setColor('blue')} className='... bg-blue-600 h-10 w-20 rounded-3xl ml-5 flex justify-center items-center'>Blue</button>
          <button onClick={() => setColor('yellow')} className='... bg-yellow-300 h-10 w-20 rounded-3xl ml-5 flex justify-center items-center'>Yellow</button>
          <button onClick={() => setColor('white')} className='... bg-white h-10 w-20 rounded-3xl ml-5 flex justify-center items-center'>White</button>
          <button onClick={() => setColor('green')} className='... bg-green-600 h-10 w-20 rounded-3xl ml-5 mr-5  flex justify-center items-center'>Green</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
