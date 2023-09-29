import React, { useEffect, useState } from 'react'
import '../index.css'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Alok123-singh')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className=' flex flex-col justify-center items-center text-center  p-10 bg-gray-600 text-white text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} className='... mt-10 mb-8 rounded-2xl'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Alok123-singh')
    return response.json();
}
