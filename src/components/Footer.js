
import '../assets/styles/Footer.css'
import '../assets/styles/Navbar.css'

import SocialMedia from '../assets/util-components/SocialMedia';


const Footer = ()=>{

    return(
        <div className="footer">
            <nav className='links'>  
                <SocialMedia/>             
            </nav>
            
            <p className='footer-p'>&copy; 2024 Samuel Katongole    
            All rights reserved.</p>
        </div>
    )

}
export default Footer;