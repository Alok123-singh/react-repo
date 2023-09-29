import React from 'react'
import '../App.css'

function InputBox({
    label,
    availaibleOptions = [],
    currentCurrencyName,
    onCurrencyChange,
    isDisabled = false,
    amount,
    onAmountChange
}) {
    // console.log(availaibleOptions);
    return (
        <div className='... flex justify-between items-center'>
            <div className='... flex justify-center items-center flex-col'>

                <label 
                className='... bg-blue-600 paraSize rounded-lg flex justify-center items-center mb-2 font-mono' style={{cursor: "default"}}
                
                > {label} </label>

                <input 
                type="number" 
                className='... rounded-lg w-80 text-black text-center outline-black' 
                style={{backgroundColor: "#9c9af5",border: "1px solid",cursor: "pointer"}}
                disabled = {isDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />

            </div>
            
            <div className='... flex justify-center items-center flex-col ml-12'>

                <p 
                className='... bg-blue-600 paraSize rounded-lg flex justify-center items-center mb-2' 
                style={{cursor: "default"}}
                
                > Currency Type </p>

                <select 
                className='... rounded-lg w-20 text-black' 
                style={{backgroundColor: "#9c9af5",border: "1px solid",cursor: "pointer"}}
                value={currentCurrencyName}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value) }
                >

                    {availaibleOptions.map((currencyName) => (

                        <option key={currencyName} value={currencyName}>
                            {currencyName}
                        </option>

                    ))}

                </select>

            </div>
        
        </div>
    )
}

export default InputBox;
