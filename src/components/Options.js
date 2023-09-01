import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/options.css'
import options from '../assets/options.svg'
import { useState } from 'react'

function Options(){
    const [previousopt,changePrevious]=useState(null);
    function selectedOption(e,_path){  
         const selectedOpt=document.getElementById(e)
         if(previousopt!=null){
            previousopt.classList.remove("selected-opt");
         }
         selectedOpt.classList.add("selected-opt");
         changePrevious(selectedOpt);
        }
  
       function OptionManager(){
        const optionsList = document.getElementById('options-list');
          if (optionsList.classList.contains('hidden')) {
            optionsList.classList.remove('hidden');
            optionsList.classList.add('visible');
          } else {
            optionsList.classList.remove('visible');
            optionsList.classList.add('hidden');
          }
      }
        

    return(
        <div className="options">
            <div className='home'><img src={options}  id="unroll-button" onClick={()=>OptionManager()}></img> <span>Options</span></div>
          <ul>
            <div className='opt-list hidden' id='options-list'>  
             <div className='opt'   onClick={(e)=>selectedOption("opt1")}><img src={options}></img><li id="opt1"><Link className='link' to="/store">Mon Entreprise</Link></li></div>
             <div className='opt'   onClick={(e)=>selectedOption("opt4")}><img src={options}></img><li id='opt4'><Link className='link' to="/">Accueil</Link></li></div>
             <div className='opt'   onClick={(e)=>selectedOption("opt2")}><img src={options}></img><li id='opt2'><Link className='link' to="/">Accueil</Link></li></div>
             <div className='opt'   onClick={(e)=>selectedOption("opt3")}><img src={options}></img><li id="opt3"><Link className='link' to="/">Accueil</Link></li></div>
             <div className='opt'   onClick={(e)=>selectedOption("opt5")}><img src={options}></img><li id='opt5'><Link className='link' to="/">Accueil</Link></li></div>
            
            </div>
           
          </ul>
        </div> 
    )
}
export default Options