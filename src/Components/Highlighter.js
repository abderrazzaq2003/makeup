import React from "react";

import { all } from "./Tableaus";
import { Link } from "react-router-dom";

function Highlighter(){
   const highlighter=all.filter((product)=>{
      return product.type==='highlighter';
   })
return(
 <div id="highlighter">
    <h1 id="h10">highlighter</h1>
     <div id="produits">
          {highlighter.map((produit,index)=>{
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
export default Highlighter;

