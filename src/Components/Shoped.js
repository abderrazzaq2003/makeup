import { all } from "./Tableaus";
import { MdDeleteForever } from "react-icons/md";
import { GrClear } from "react-icons/gr";
import '../styles/shoped.css'

function Shoped(){
    const shoped=all.filter((items)=>{
        return items.nbsells > 0;
    });
    if(shoped.length>0){
        return(
        <div id="shoped">
            {shoped.map((items)=>{
                return(
                    <div id="produit-shoped">
                     <div id="head">
                        <img src={items.img}/>
                     </div>
                     <div id="body">
                        <h1>{items.caption}</h1>
                        <p>{items.desc}</p>
                     </div>
                     <div id="footer">
                        <p>shoped : {items.nbsells}</p>
                        <button id="delete" onClick={()=>{
                            {items.nbsells-=1}
                            
                        }}><MdDeleteForever/></button>
                     </div>
                    </div>               
 )
            })}
        </div>
        )
    }
    else{
        return(
            <div id="empty">
                <p><GrClear/></p>
            </div>
        )
    }
    
}
export default Shoped;