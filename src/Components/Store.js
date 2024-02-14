import { prtypes } from "./Tableaus";
import Promotion from "./Promotion";
import { motion } from "framer-motion";
import '../styles/style5.css';
import { Link , Outlet } from "react-router-dom";
import { useRef, useState, useEffect} from "react";
import Footer from './Footer';





export default function Product(){

    const [left,setLeft]=useState(0);
    
   
   
    useEffect(()=>{
   setLeft(ldrag.current.scrollWidth - ldrag.current.offsetWidth);
    },[]);
    const ldrag=useRef();
   
    return(
<div id="store">
 
  <Promotion/>

  <h1 id="h10">the products types</h1>


    <motion.div id="container-cardes" ref={ldrag}>

        <motion.div id="cardes" drag="x" dragConstraints={{right:0,left:-left}}>
     <div id="carde">
            <Link to="all" id="h1">All</Link>
          </div>  
              {prtypes.map((type)=>{
                return(
               <motion.div id="carde" >
                  <Link to={type.to} id="h1">{type.caption}</Link>
                  <img src={type.img} alt=""/>
                  
                </motion.div>
               
              )}
              )}

         </motion.div>

    </motion.div>
    <Outlet/>
    <Footer/>
  

 
  
    

</div>
    )
    }