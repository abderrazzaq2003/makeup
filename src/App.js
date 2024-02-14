 import React from "react";
import Acceuil from "./Components/Acceuil";
import Store from './Components/Store';
import Header from './Components/Header';
import Blush from "./Components/Blush";
import All from "./Components/All";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Bronzer from "./Components/Bronzer";
import Concealer from "./Components/Concealer";
import Produitdetails from "./Components/Produitdetails";
import Foundation from "./Components/Foundation";
import Eyeshadow from "./Components/Eyeshadow";
import Powder from "./Components/Powder";
import Highlighter from "./Components/Highlighter";
import Mascara from "./Components/Mascara";
import Eyeliner from "./Components/Eyeliner";
import Searches from "./Components/Searches";
import Shoped from "./Components/Shoped";
import Aide from "./Components/Aide";





function App(){
return(
<div id="container" style={{height:'100vh'}}>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Acceuil/>}></Route>
      <Route path="/store" element={<Store/>}>
      <Route path="blush" element={<Blush/>}/>
      <Route path="all"  element={<All/>}/>
      <Route path="bronzer"  element={<Bronzer/>}/>
      <Route path="concealer"  element={<Concealer/>}/>
      <Route path="foundation"  element={<Foundation/>}/>
      <Route path="eyeshadow"  element={<Eyeshadow/>}/>
      <Route path="powder"  element={<Powder/>}/>
      <Route path="highlighter"  element={<Highlighter/>}/>
      <Route path="mascara"  element={<Mascara/>}/>
      <Route path="eyeliner"  element={<Eyeliner/>}/>
      <Route  index element={<All/>}/>
      </Route>
      <Route path="/store/produitdetails/:id" element={<Produitdetails/>}/>

       <Route path="/searches/:caption" element={<Searches/>}/>
       <Route path="/shoped" element={<Shoped/>}/>
       <Route path="/aide" element={<Aide/>}/>
        
    </Routes>

    
     
    </BrowserRouter>
    
    
    


 

</div>
)
}
export default App; 

