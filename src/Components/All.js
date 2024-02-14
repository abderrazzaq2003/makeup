import { all } from "./Tableaus";
import { Link} from "react-router-dom";
function All(){
    
    return(
    <div id="all">
        <h1 id="all">all products</h1>
  
        <div id="produits">
          {all.map((produit,index)=>{
            return(
              <div id='produit'>
                <div id="c-h">
                  <img src={produit.img}/>
                </div>
                <div id="c-b">
                  <h2>{produit.caption}</h2>
                  <p>{produit.desc}</p>
                  <h3>{produit.prix}</h3>
                </div>
                <div id="c-f">
                  <button  id={`btn-shop`} 
                
     
     
                  ><Link style={{textDecoration:'none',color:"white"}} to={`/store/produitdetails/${produit.id}`} id="link">buy now</Link> </button></div>
              </div>
            )
          })}
        
    
        </div>
       
    
    

</div>
)
        }
export default All;
export const saveindx=()=>{
  return parseFloat(document.getElementById('indx').textContent);
}
