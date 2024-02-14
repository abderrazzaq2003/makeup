import { useEffect } from "react";
import React from "react";
import '../styles/sconttree.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
function Conttree(){
    useEffect(()=>{
        Aos.init({duration:2000});
            },[])
    return(
    <div id="conttree">
       
       <div id="rgba">
       <div id="img20" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <img src="img\jeune-femme-maquillage-lumineux-chapeau-noir.jpg"  />
        </div>
        <div id="d20" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <h1>let's beging shoping </h1>
            <button><Link to={'/store'} style={{textDecoration:'none',color:'black'}}>let's shop</Link></button>
        </div>
       </div>
       
    </div>

    )
}
export default Conttree;