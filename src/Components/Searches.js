import { useParams } from "react-router-dom";
import { all } from "./Tableaus";
import { Link } from "react-router-dom";
import '../styles/searchstyle.css';
import { MdOutlineReportProblem } from "react-icons/md";

function Searches(){
    const {caption}=useParams();
    const searches=all.filter((item)=>{
        return  item.caption.indexOf(caption)>=0 ;
    })
    if(searches.length>0){
        return(
            <div id="searches">
            {
                searches.map((produit)=>{
                    return(
                        <div id='product'>
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
                            ><Link to={`/store/produitdetails/${produit.id}`}  id="link">buy now </Link> </button></div>
                        </div>
              
                      )
                })
            }
           
        </div>
    )
        }
        else{
            return(
                <div id='not-found'>
                    <MdOutlineReportProblem id="problem"/>
                    <p>i don't find any product on this caption </p>
                </div>
            )
                
            
        }
        
    }
  
    
       

export default Searches;