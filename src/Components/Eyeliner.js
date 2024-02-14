import React from "react";

import { all} from "./Tableaus";
import { Link } from "react-router-dom";

function Eyeliner(){
   
   const eyeliner=all.filter((product)=>{
      return product.type==='eyeliner';
   })
return(
 <div id="eyeliner">
    <h1 id="h10">eyeliner</h1>
     <div id="produits">
          {eyeliner.map((produit,index)=>{
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
export default Eyeliner;

