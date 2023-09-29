import React from 'react'
import '../index.css'
import Pic from '../Pictures/nature.jpg'
import DescPic from '../Pictures/image2.jpg'


function Home() {
    return (
        <div className='...  items-center p-20'>
            <div className='... flex justify-evenly items-center'>
                <img src={Pic} alt = ''  className='... rounded-2xl'/>
                <div className='... flex flex-col justify-center items-center ml-[12rem]'>
                    <h1 className='... m-1 flex '>Download Now</h1>
                    <h2 className='... m-1'>Create New World</h2>
                    <button type='button' className='... m-3 p-3 bg-orange-500 rounded-lg'>Download Now</button>
                </div>
            </div>

            <div className='... flex flex-wrap justify-center items-center mt-[7rem]'>
                <img src={DescPic} alt = '' className='... h-30 w-80 rounded-xl'></img>
            </div>

        </div>
    )
}

export default Home
