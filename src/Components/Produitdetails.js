import {  useParams } from "react-router-dom";
import '../styles/pdetails.css';
import { all } from "./Tableaus";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";
function Produitdetails(){
    const back=useNavigate()
    const [nbshop,setNbshop]=useState(0);
    const { id }=useParams();
    const prdetails=all.filter((item)=>{
        return item.id==id ;
    });
    const add=()=>{
        setNbshop(nbshop+1);
    };
    const des=()=>{
        setNbshop(nbshop- 1);
        
    };
   
    return(
        <div id="details">
            <p id="p-succes">succes <GoVerified id="icon-verif"/></p>
        {prdetails.map((items)=>{
                return(
                    <div id="prdetails">
                       <div id="image-shop">
                       <div id="image">
                        <img src={items.img}/>
                        </div>
                        <div id="shop">
                          <button id="add" onClick={add}>+</button>
                          <p id="nbshop">{nbshop>=0?nbshop:setNbshop(0)}</p>
                          <button id="des" onClick={des}>-</button>

                        </div>
                        
                       </div>
                       <div id="det">
                        <div id="description">
                        <h1>{items.caption}</h1>
                        <hr/>
                        <p>{items.desc}</p>
                        <div id="btn-shop">
                        <button id="succes" onClick={()=>{
                            {items.nbsells+=nbshop}
                            document.getElementById('p-succes').style.opacity='1';
                            document.getElementById('p-succes').style.transition='1s';
                        }}>valide</button>
                        <button id="close" onClick={()=>{back(-1)}}>close</button>
                        </div>
                        </div>
                       
                        <div id="rate">
                        <div id="geniral">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea fuga distinctio laborum reprehenderit dicta eveniet dolor vitae alias, tempore error odio mollitia non suscipit porro nobis, dignissimos aut enim. Adipisci earum fuga, vero commodi quia nostrum magni quasi dolore? Explicabo quisquam tenetur laborum in debitis expedita eligendi, iusto voluptate!</p>
                            </div>
                            <div id="stars">
                            <IoStar id="star"/>
                            <IoStar id="star"/>
                            <IoStar id="star"/>
                            <IoStar id="star"/>
                            <IoStar id="star"/>
                            </div>
                        </div>

                       </div>
                    </div>
                    
                )
            })} 
        </div>
    )
}
export default Produitdetails;