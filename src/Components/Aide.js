import { useState } from "react";
import '../styles/aide.css'
function Aide(){
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
   
   return(

    <section class="contactuser">
        <div class="headingcontact">
           <p> {email} you say {message}</p>
            <h1>say something!</h1>
        </div>


    
    <form onSubmit={(e)=>e.preventDefault
    }>
         <input type="email" name="email" required placeholder="enter your email" class="box" onChange={(e)=>setEmail(e.target.value)}/>
         <textarea name="message" class="box" placeholder="enter your message" onChange={(e)=>setMessage(e.target.value)}></textarea>
         <input type="submit" value="send message" name="send" class="btncontact"/>
      
    </form>
    </section>
    
    
    

   
      
      
   

    
)
}
export default Aide;
