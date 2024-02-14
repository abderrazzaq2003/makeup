import React from "react";

import { all} from "./Tableaus";
import { Link } from "react-router-dom";

function Bronzer(){
   
   const bronzer=all.filter((product)=>{
      return product.type==='bronzer';
   })
return(
 <div id="blush">
    <h1 id="h10">bronzer</h1>
     <div id="produits">
          {bronzer.map((produit,index)=>{
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
                  <button style={{textDecoration:'none',color:"white"}}  id={`btn-shop`}><Link to={`/store/produitdetails/${produit.id}`} id="link">buy now</Link> </button></div>
              </div>
    
            )
          })}
        
    
        </div>
 </div>
)
}
export default Bronzer;

