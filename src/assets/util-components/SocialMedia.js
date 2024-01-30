
import '../styles/SocialMedia.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialMedia(){
    const socialMedia = [
        {name:"GitHub", url:"https://github.com/Shemuel2060/"},
        {name:"Twitter", url:"https://www.twitter.com/"},
        {name:"Linkedin", url:"https://www.linkedin.com/feed/"}
    ]
    return(
        <div>
            {socialMedia.map((channel,index)=>(
                <a className="social-links" key = {index} href={channel.url} target="_blank"
                rel="noreferrer"/**for securit */>
                    <FontAwesomeIcon 
                    icon={channel.name ==="GitHub" ? faGithub :
                    channel.name==="Twitter"? faTwitter : faLinkedin} 
                    /></a>
            ))}
        </div>
    )
}
export default SocialMedia;