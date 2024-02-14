import React from "react";
import Contwo from './Contwo';
import Contone from './Contone';
import Conttree from "./Conttree";
import Footer from "./Footer";

function Acceuil(){
return(
<div id="container" style={{height:'100vh'}}>
   
    <Contone/>
    <Contwo/>
    <Conttree/>
    <Footer/>
    

</div>
)
}
export default Acceuil;