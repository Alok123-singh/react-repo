import { useCallback, useEffect, useState } from 'react';
import './App.css'
import InputBox from './components/InputBox'

// custom hook
function fetchCurrencyOptions(currency){
  const [data,setData] = useState({});
  const fetchOptions = useCallback(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((response) => response.json())
    .then((response) => setData(response[currency]))
    .catch((e) => (console.log(e)))
    // console.log(data);
  },[currency]);

  useEffect(fetchOptions,[currency]);

  return (data);
}

function App() {

  const [currencyName,setCurrencyName] = useState("usd");
  const [amount,setAmount] = useState();
  const [transferCurrencyName,setTransferCurrencyName] = useState("inr");
  const [transferedAmount,setTransferedAmount] = useState();

  const currencyOptions = fetchCurrencyOptions(currencyName);
  console.log(currencyOptions);
  
  const keys = Object.keys(currencyOptions);
  // console.log(keys);

  const showConvertedAmount = () => {
    const temp = amount * currencyOptions[transferCurrencyName];
    setTransferedAmount(temp);
  };

  const swap = () => {
    setAmount(transferedAmount);
    setTransferedAmount(amount);
    setCurrencyName(transferCurrencyName);
    setTransferCurrencyName(currencyName);
  };

  return (
    <div className='... w-screen h-screen flex justify-center items-center container'>

      <div className='... text-white outerBoxSize flex flex-col flex-wrap justify-center items-center rounded-xl'>
        <form onSubmit={(e)=>{
          e.preventDefault();
        }} className='... flex flex-col justify-center items-center'>

            <div className='... flex justify-center items-center'>
              <InputBox 
              label="From" 
              availaibleOptions={keys} 
              currentCurrencyName={currencyName} 
              onCurrencyChange={(changedCurrency)=> setCurrencyName(changedCurrency)}
              isDisabled = {false}
              amount = {amount}
              onAmountChange={(amount) => {
                if(amount < 0){
                  alert('Please enter valid amount !');
                  amount = 0;
                }
                else{
                  setAmount(amount);
                }
              }}
              />
            </div>

            <div className='... flex justify-center items-center bg-blue-600 rounded-lg w-20 h-10 mt-10 mb-10'>
              <button 
              type="button" 
              className='... text-white'
              onClick={swap}
              >SWAP</button>
            </div>

            <div className='... flex justify-center items-center'>
              <InputBox 
              label="To" 
              availaibleOptions={keys} 
              currentCurrencyName={transferCurrencyName} 
              onCurrencyChange={(changedCurrency)=> setTransferCurrencyName(changedCurrency)}
              isDisabled = {true}
              amount = {transferedAmount}
              onAmountChange={() => {}}
              />
            </div>
          
            <button 
            type="button" 
            className='... w-[31rem] h-[3rem] mt-10 bg-blue-600 text-center rounded-lg'
            onClick={showConvertedAmount}
            >Convert {currencyName.toUpperCase()} to {transferCurrencyName.toUpperCase()}</button>

        </form>
      </div>
    
    </div>
  )
}

export default App
