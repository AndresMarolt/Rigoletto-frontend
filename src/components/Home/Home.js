import { useScrollPercentage } from 'react-scroll-percentage';
import HomeIntro from './HomeIntro/HomeIntro';
import HomeHero from './HomeHero/HomeHero';
import HomePromo from './HomePromo/HomePromo';
import './Home.scss'

const Home = () => {

    return(
        <div>
            <HomeHero />
            <HomePromo />
            <HomeIntro />

                <section className='map'>
                    <h2 className='map_title'>NUESTRO LOCAL</h2>
                    <div style={{display: 'flex', gap: '30px'}}>
                        <iframe className='map_iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.995010998803!2d-58.39097958505228!3d-34.604287665034676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6ab359743%3A0x86cde6886d380112!2sAv.%20Corrientes%201536%2C%20C1042AAO%20CABA!5e0!3m2!1ses!2sar!4v1655135872601!5m2!1ses!2sar" width="600" height="450" style={{border: "4px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div style={{width: '50%', textAlign: 'left'}}>
                            <h3>Dirección: </h3>
                            <p>Av. Corrientes 1536, CABA</p>

                            <h3>Nuestros horarios: </h3>
                            <p>De lunes de viernes: 11hs. a 22hs</p>
                            <p>Sábados y domingos: 11hs. a 00hs</p>

                            <h3>Teléfono: </h3>
                            <p>4444-4444</p>
                        </div>
                    </div>
                </section>  
                

            
        </div>
    )
}

export default Home;