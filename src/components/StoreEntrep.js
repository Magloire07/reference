import '../styles/StoreEntrep.css'
import house from '../assets/house.svg'
import logo_site from '../assets/logo_site.svg'
import owner from '../assets/owner.svg'
import Produit from './Produit'
import React from 'react'
function StoreEntrep(){
    const name_entreprise="hamada"
    const logo_entreprise=house
    const description_activity="vendeur habits"
    const avis =53
    const categorie ="charpenterie"
    const siteWeb=logo_site
    const detenteur="Mr Hamada"
    const  lst=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return(
        <div className='store'>
            <div className="descrEntrep">
                
                    <div className='log_entrep'>
                        <img  src={logo_entreprise} alt="logo"/>
                    </div>
                    <div className='info_entrep'>
                        <h3>  {name_entreprise}</h3>
                        <div className="log_nom_owner">
                            <img  className="owner" src={owner} alt="logo"/>
                            <p>  {detenteur}</p>
                        </div>
                        <p><span>Description:</span> {description_activity}</p>
                        <p><span>Categorie:</span> {categorie}</p>
                        <div className='web_page'>
                            <img  className="log_site" src={siteWeb} alt="site_web"/>
                            <a href='#' title='visiter notre site web'>http//Example.domain</a> 
                        </div>
                        <p> <span>Avis:</span> {avis}</p> 
                    </div>  
              
            </div>
            <div className="produit">
                    {lst.map((_,index)=>(<Produit key={index}>{index}</Produit>))}
            </div>
        </div>
    )
}
export default StoreEntrep