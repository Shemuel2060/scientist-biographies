

import '../assets/styles/Navbar.css'

import SocialMedia from '../assets/util-components/SocialMedia';


function Navbar(){

    return(
        <div className="nav-bar">
            <h3>Scientist Biographies</h3>
            <div className='links'>                
                <SocialMedia/>
            </div>            
        </div>
    )

}

export default Navbar;