import React from 'react'
import iconFiltrer from '../assets/filtrer.svg'
import '../styles/FiltreEntrep.css'


export  default function Filtrer(){

  function manageClickFiltrer(){
    const overlay = document.getElementById('F_overlay');
    const ban = document.getElementById('banner');
    if (ban.classList.contains('F_hidden')) {
        overlay.classList.add('F_Ovisible');
        overlay.classList.remove('F_Ohidden');
        ban.classList.remove('F_hidden'); 
        ban.classList.add('F_visible');
      } else {
        overlay.classList.add('F_Ohidden');
        overlay.classList.remove('F_Ovisible');
        ban.classList.remove('F_visible');
        ban.classList.add('F_hidden');
      }
}
 return(
    <React.Fragment>
    <div className='filtrer'  >
        <button className="icon-button" onClick={()=>manageClickFiltrer()}>
            <img src={iconFiltrer} alt="Microphone"/>
        </button>
        <div  id='banner' className='banner_Filtrer F_hidden'>

        </div>
    </div>
    <div id="F_overlay" className="F_Ohidden"></div>

    </React.Fragment>
 )
}