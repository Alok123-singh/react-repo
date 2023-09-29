import React from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'

function User() {
    const {userId} = useParams()
  return (
    <div className='flex justify-center items-center bg-gray-600 text-white text-3xl p-20'>
        User: {userId}
    </div>
  )
}

export default User