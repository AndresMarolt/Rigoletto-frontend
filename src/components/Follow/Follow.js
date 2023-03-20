import './Follow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 

const Follow = () => {

    return(
        <div className='follow'>
            <h2 className='follow_title'>SEGUINOS EN NUESTAS REDES SOCIALES</h2>
            <div className='follow_icons'>
                <a href="https://wa.me/5491138940402" target={"_blank"}>
                    <FontAwesomeIcon icon={faWhatsapp} className="rrss_icon"/>
                </a>

                <a href="https://www.instagram.com" target={"_blank"}>
                    <FontAwesomeIcon icon={faInstagram} className="rrss_icon"/>
                </a>

                <a href="https://www.facebook.com" target={"_blank"}>
                    <FontAwesomeIcon icon={faFacebook} className="rrss_icon"/>
                </a>

                <a href="https://www.twitter.com" target={"_blank"}>
                    <FontAwesomeIcon icon={faTwitter} className="rrss_icon"/>
                </a>
            </div>
        </div>
    )
}

export default Follow;