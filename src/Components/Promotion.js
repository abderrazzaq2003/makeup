import {  Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import '../styles/promostyle.css'
const promotios=[
    {
        'img':'/promotios/img1.jpg'
},
{
    'img':'/promotios/img2.jpg'
},
{
    'img':'/promotios/img3.jpg'
},
{
    'img':'/promotios/img4.jpg'
},
{
    'img':'/promotios/img5.jpg'
}

]
export default function Promotion(){
return(
    <div id="slade">
      <Zoom id='zoom'>
        {promotios.map((promo)=>{
            return(
                <img src={promo.img} id="img-promo"/>
            )
        })}
      </Zoom>
    </div>
)
}