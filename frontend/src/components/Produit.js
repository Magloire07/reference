import imgProd from '../assets/cactus.jpg'
import '../styles/Produit.css'
import React from 'react'

function Produit({num}){
    return(
        <div className="prod">
            <img  alt={"prod"+{num}} className="img_prod"src={imgProd}/>
            <h1> fleur</h1>
        </div>
    )
}
export default Produit