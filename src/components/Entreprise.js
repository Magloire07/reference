import '../styles/entreprise.css'
import owner from '../assets/owner.svg'
import logo_imble from '../assets/logo_imble.svg'
import React from 'react'
function Entreprise({logo_entreprise,name_entreprise,description_activity,avis,categorie,siteWeb,detenteur}){
    return(
        <div className="vue_entrep">
            <div className='vitrine-entrep'>
            <img  className="log_entrep" src={logo_entreprise} alt="logo"/>
            </div>
            <img  className="logo_imble" src={logo_imble} alt="logo_imble"/>
            <h3>  {name_entreprise}</h3>
            <div className='bare'></div>
            <img  className="owner" src={owner} alt="logo"/>
            <p>  {detenteur}</p>
            <div className='bare'></div>
            <p><span>Description:</span> {description_activity}</p>
            <div className='bare'></div>
            <p><span>Categorie:</span> {categorie}</p>
            <div className='bare'></div>
            <img  className="log_site" src={siteWeb} alt="site_web"/>
            <div className='bare'></div>
            <p> <span>Avis:</span> {avis}</p>
            
            
        </div>
    )
}
export default Entreprise