import './AboutUs.css'
import Follow from '../Follow/Follow'

const AboutUs = () => {
    return(
        <div>
            <img src='./img/fondo-img.jpeg' className='fondo-contactos'></img>
            <h2 className='contacto_titulo Container'>NOSOTROS</h2>

            <div className="aboutus Container">
                <img className="aboutus-img" src="https://muchosnegociosrentables.com/wp-content/uploads/2020/08/abrir-una-pizzeria-como-montar-una-pizzeria-exitosa.jpg" alt="AboutUs"></img>

                <p className="aboutus-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ante sed erat tristique semper sit amet non risus. Nullam aliquam aliquet odio sed eleifend. Aenean turpis est, dictum in sapien iaculis, finibus scelerisque ipsum. Aenean porttitor dolor id quam bibendum dapibus. Donec mi nunc, hendrerit et consectetur vel, auctor quis lacus. Morbi elit sapien, convallis eget dui at, pulvinar dapibus lectus. Nunc nec ultrices sapien. Ut varius ipsum vel cursus aliquet.

Morbi lacus velit, efficitur id facilisis a, vehicula sit amet ex. Phasellus mollis neque in risus aliquet pretium. Nulla ornare est pretium purus dapibus faucibus. Aenean eget nunc porttitor, sagittis ligula eu, viverra lorem. Pellentesque massa ante, tempus id rhoncus quis, convallis ut nisi. Donec a tortor lobortis, convallis lectus sed, scelerisque turpis. Sed cursus felis at libero iaculis facilisis. Sed convallis lorem commodo tortor egestas, ac tincidunt ligula bibendum. Morbi ultrices eget nisl sed commodo. Nam hendrerit neque est, vel rhoncus nisl molestie vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla porttitor mollis nulla, at sodales ex placerat sed. Morbi semper risus at ultricies varius. Duis urna est, porta nec gravida quis, efficitur sed metus. Nullam commodo augue vitae magna condimentum, eu viverra diam tempor. Sed sit amet quam justo.
                </p>
            </div>

            <Follow />
            
        </div>
    )
}



export default AboutUs;