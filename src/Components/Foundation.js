import React from "react";

import { all } from "./Tableaus";
import { Link } from "react-router-dom";

function Foundation(){
   const foundation=all.filter((product)=>{
      return product.type==='foundation';
   })
return(
 <div id="foundation">
    <h1 id="h10">foundation</h1>
     <div id="produits">
          {foundation.map((produit,index)=>{
            return(
              <div id='produit'>
                <div id="c-h">
                  <img src={produit.img} alt=""/>
                </div>
                <div id="c-b">
                  <h2>{produit.caption}</h2>
                  <p>{produit.desc}</p>
                  <h3>{produit.prix}</h3>
                </div>
                <div id="c-f">
                  <button  id={`btn-shop`}
                  ><Link style={{textDecoration:'none',color:"white"}} to={`/store/produitdetails/${produit.id}`}  id="link">buy now </Link> </button></div>
              </div>
    
            )
          })}
          
    
        </div>
 </div>
)
}
export default Foundation;

