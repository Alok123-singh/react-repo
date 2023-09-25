import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const myObj1 = {
    Age: 21,
    description: "Hello from first object !"
  };

  const myObj2 = {
    Age: 30,
    description: "Hello from second object !"
  };

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username='alok' someObject = {myObj1} />
      <Card username='anand' someObject = {myObj2} />

    </>
  )
}

export default App
