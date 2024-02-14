import { FaFacebook,FaInstagram ,FaTwitter} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import '../styles/sfooter.css';
function Footer(){
    return(
        <footer>
            <div id="diff">
        <h1>majouj and daou developers</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veniam ipsum dolorum consectetur est totam alias sapiente laudantium mollitia odit porro quasi commodi dignissimos suscipit nisi iste ipsa provident error libero perferendis, minima dolor. Nihil reiciendis, dolor autem aliquid aspernatur est quisquam corporis tempora harum natus repudiandae incidunt soluta voluptate, iure placeat sapiente deserunt praesentium voluptates. Doloremque neque, quam tenetur odit, perferendis, animi omnis provident maxime cum odio impedit ea repudiandae qui consequatur recusandae? Sunt possimus amet fuga ipsum, quibusdam sit ex, corrupti molestias hic quam explicabo quisquam eaque a optio reiciendis, voluptatum dolore neque deleniti cupiditate rem aliquam natus. Commodi eveniet veritatis, minus libero provident necessitatibus maiores saepe cumque architecto! Blanditiis vel, laborum eius porro eos placeat vitae odit sequi incidunt voluptatem eum nostrum, nisi laudantium. Doloribus ipsa culpa cupiditate quia esse sequi consectetur commodi repellendus eveniet. Repudiandae unde aperiam sapiente! Ipsa ad aliquid nemo culpa laudantium optio repudiandae.</p>
        <div id="icons">
        <a href="" id="l"><FaFacebook id="fc"/></a>
        <a href=""  id="l"><FaInstagram id="is"/></a>
        <a href="" id="l"><IoLogoTiktok id="tk"/></a>
        <a href="" id="l"><FaTwitter id="tw"/></a>
        <a href="" id="l"><FaLinkedin id="ld"/></a>
        </div>

        </div>
        <p>Majouj-Daou@copyright2024</p>

        </footer>
    )
}
export default Footer;