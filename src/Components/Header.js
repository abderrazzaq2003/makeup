import React from "react";
import { NavLink,Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import '../styles/headerstyle.css';
import { FaCartShopping } from "react-icons/fa6";

function Header(){
    const [productname,setProductname]=useState('');
    return(
    <div style={{height:'10%'}}>
        <header style={{display:'flex',justifyContent:'space-around',width:'100%',height:'100%',background:'black'}}>
            <h1 style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:'Fantasy'}}>MakShop</h1>
            <nav style={{listStyle:'none',display:"flex",justifyContent:'space-around',width:'40%',alignItems:'center'}}>
                <NavLink to="/"  style={{textDecoration:'none',color:'white',fontSize:'20px',fontFamily:'Sans-serif'}}>acceuil</NavLink>
                <NavLink to="/store"  style={{textDecoration:'none',color:'white',fontSize:'20px',fontFamily:'Sans-serif'}}>store</NavLink>
                <NavLink to='/aide' style={{textDecoration:'none',color:'white',fontSize:'20px',fontFamily:'Sans-serif'}}>aide</NavLink>
                <NavLink to="/shoped" style={{textDecoration:'none',color:'white',fontSize:'20px',fontFamily:'Sans-serif',position:'relative',top:'4px'}}><FaCartShopping/></NavLink>
            </nav>
            <div id="search">
            <p id="search-icon"><FaSearch/></p>
            <input type="search" id="search-prouct" onChange={(e)=>{setProductname(e.target.value);console.log(productname)}} value={productname}/>
            <button id="valide-search"><Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontFamily:'Sans-serif'}} to={`/searches/${productname}`}>search</Link></button>
            </div>
            
        </header>
    </div>
    )
}
export default Header;