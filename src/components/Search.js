import '../styles/search.css'
import microphone from '../assets/microphone_1.svg'
import loupe from '../assets/loupe_1.svg'
import camera from '../assets/camera.svg'
import React from 'react'


function Search(){
    return(
        <div className='search'>
        <div className="search-container">

        <input type="text" className="search-input" placeholder="Search..."/>
        
        <button className="icon-button">
        <img src={loupe} alt="Microphone"/>
        </button>
        </div>
        <button className="icon-button">
        <img src={microphone} alt="Microphone"/>
        </button>
        <button className="icon-button">
        <img src={camera} alt="Camera"/>
        </button>
 
        </div>
    )
}
export default Search