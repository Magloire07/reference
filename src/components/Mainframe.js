import Entreprise from './Entreprise'
import '../styles/mainframe.css'
import house from '../assets/logo_REF.svg'
import logo_site from '../assets/logo_site.svg'
import React from 'react'
function Mainframe(){
    const name_entreprise="hamada"
    const logo_entreprise=house
    const description_activity="vendeur habits"
    const avis =53
    const nombreEntrep = [1,2,3,4,5,6,7,8,9,0];
    const categorie ="charpenterie"
    const siteWeb=logo_site
    const detenteur="Mr Hamada"
    
    return( 
    <div className='mainframe'>
        {nombreEntrep.map((_, index) => (
    <Entreprise
      key={index}
      name_entreprise={name_entreprise}
      logo_entreprise={logo_entreprise}
      description_activity={description_activity}
      avis={avis}
      categorie={categorie}
      siteWeb={siteWeb}
      detenteur={detenteur}
    />
  ))}
        </div>)
}
export default Mainframe