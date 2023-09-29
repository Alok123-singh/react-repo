import React from 'react'
import '../index.css'
import OfficePic from '../Pictures/office.jpg'


function About() {
    return (
        <div className='... flex justify-between items-center p-10'>
            <img src={OfficePic} alt = ''  className='... rounded-2xl ml-10'/>
            <div className='...flex flex-col justify-evenly items-center pl-40'>
                <h1>
                    React Development is carried out by passionate developers
                </h1>

            
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, eum natus! Neque, ad ea et laudantium error voluptas enim consequuntur.
                </p>
                
                <br/>
                <p>
                    dolor sit amet consectetur adipisicing elit. Sed tenetur ut laboriosam ipsum sequi voluptate perferendis ducimus! Maiores, aperiam vel.
                </p>
            </div>
        </div>
    )
}

export default About
