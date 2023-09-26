import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("default");

  let passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,31);
    window.navigator.clipboard.writeText(password);
  },[password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvmxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += '$#@!%^&*()_';

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
      
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(passwordGenerator,[length,numberAllowed,charAllowed,passwordGenerator]);

  return (
    <>
      <div className='... w-screen h-screen bg-gray-800 text-white'>

        <div className='... w-100 flex flex-col justify-center'>
          <div className='... text-center text-4xl pt-7'>
            <h1>Password Generator</h1>
          </div>

          <div className='... flex justify-center mt-4'>
            <input type="text" value={password} readOnly ref = {passwordRef} className='... w-[20rem] rounded-lg text-black flex justify-center text-center cursor-default'/>
            <button onClick={copyPasswordToClipboard} className='... ml-1 w-14 h-8 flex justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500'>Copy</button>
          </div>

          <div className='... flex justify-center mt-4'>
            <input type="range" min={4} max={30} className = '... mt-[3px] cursor-pointer' value={length} onChange={
              (e) => setLength(e.target.value)
            } />
            <label className='... ml-1'>Length: {length}</label>

            <input type="checkbox" defaultChecked={numberAllowed} name="Number" id="numberId" className='... ml-5 mt-[3px] cursor-pointer' onChange={ () => {
                setNumberAllowed((prev) => {return !prev})
              }
            }/>
            <label className='... ml-1'>Number</label>

            <input type="checkbox" defaultChecked={charAllowed} name="Character" id="charId" className='... ml-5 mt-[3px] cursor-pointer' onClick={ () => {
                setCharAllowed((prev) => {return !prev})
              }
            }/>
            <label className='... ml-1'>Character</label>

          </div>
          
        </div>

      </div>
    </>
  )
}

export default App
