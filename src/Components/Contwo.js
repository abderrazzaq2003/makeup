import React from "react";
import { useEffect } from "react";
import '../styles/ctwo.css'
import Aos from "aos";
import 'aos/dist/aos.css'
function Contwo(){
    useEffect(()=>{
Aos.init({duration:2000});
    },[])
    return(
        <div id="def1">
        <div id="text1"   data-aos="fade-up"  >
            <h1 id="h10">defenition des produite :</h1>
            <p id="p10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus labore soluta nobis tempore eos omnis, aliquid mollitia sequi! Autem, odit? Iure necessitatibus labore aut, dicta debitis fuga cum ipsa quod ex quam expedita dolorum aliquam reprehenderit optio, error, placeat iusto atque cumque mollitia magnam odit molestias! Perspiciatis omnis ullam rerum, nostrum laboriosam atque ad error aliquam quidem. Dicta accusantium provident dolore. Repellendus, praesentium explicabo natus assumenda odit facere. Voluptatem quia delectus, error reiciendis velit ducimus dolorum consectetur ad laboriosam quam commodi atque voluptas eligendi voluptatum dolor, temporibus et non adipisci dolores quos nam nesciunt fuga? Voluptatibus quod nesciunt, tempora veniam ab doloremque. Vitae mollitia magnam repudiandae, rem atque corporis molestias consequuntur deserunt cupiditate soluta debitis quis ea quae et nihil magni dicta. Dolorem, atque cumque ab 
         </p>
        </div>
        <div id="img1" data-aos="fade-left"  >
        <img src="img/beau-maquillage-artistique.jpg"></img>
        </div>
        </div>
        
    )
}
export default Contwo;