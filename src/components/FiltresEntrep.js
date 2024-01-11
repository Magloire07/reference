import React from 'react'
import iconFiltrer from '../assets/filtrer.svg'
import iconFermer from '../assets/icone_Fermer.svg'

import '../styles/FiltreEntrep.css'


export  default function Filtrer(){

    /* Fonction de gestion de click  */
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
function manageClickEffacer(){

}
function manageClickRechercher(){

}

const total=0;
 return(
    <React.Fragment>
    <div className='filtrer'  >
        <button className="icon-button" onClick={()=>manageClickFiltrer()}>
            <img src={iconFiltrer} alt="Microphone"/>
        </button>
        <div  id='banner' className='banner_Filtrer F_hidden'>
            <header>
              <h2>Tout les filtres</h2>
              <button className="icon-button" onClick={()=>manageClickFiltrer()}>
                    <img src={iconFermer} alt="Fermer"/>
              </button>
            </header>
            <div>

            </div>  
            <footer>
              <button className="bt_effacer" onClick={()=>manageClickEffacer()}>
                 <h3>Tout Effacer</h3>
               </button>
              <button className="bt_rechercher" onClick={()=>manageClickRechercher()}>
                 <h3> Rechercher( <span>{total}</span>)</h3>
              </button>
            </footer> 

        </div>
    </div>
    <div id="F_overlay" className="F_Ohidden"></div>

    </React.Fragment>
 )
}