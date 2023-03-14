import './Follow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 

const Follow = () => {

    return(
        <div className='follow'>
            <h2 className='follow_title'>SEGUINOS EN NUESTAS REDES SOCIALES</h2>
            <div className='follow_icons'>
                <FontAwesomeIcon icon={faWhatsapp} className="rrss_icon"/>
                <FontAwesomeIcon icon={faInstagram} className="rrss_icon"/>
                <FontAwesomeIcon icon={faFacebook} className="rrss_icon"/>
                <FontAwesomeIcon icon={faTwitter} className="rrss_icon"/>
            </div>
        </div>
    )
}

export default Follow;