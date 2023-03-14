import './HomeIntro.css'
import Fade from 'react-reveal/Fade'

const HomeIntro = (side) => {
    return(
        <>
                <section className='presentacion justify-end'>
                    <Fade left>
                        <div className='presentacion-over Container'>
                            <span className='linea'></span>
                            <p className='presentacion-over-texto presentacion-over-texto-titulo'>Bienvenidos a</p>
                            <p className='presentacion-over-texto presentacion-over-texto-marca'>Rigoletto</p>
                            <p className='presentacion-over-texto text'>La experiencia Rigoletto forma parte de un concepto único, un cuidado proceso de preparación de nuestras masas combinada con los mejores ingredientes. La idea surge al querer traer a la ciudad un concepto de auténtica pizza italiana.</p>
                        </div>
                    </Fade>
                    <img src="/img/cocinando1.jpg" className='presentacion-img'/>
                </section>

            
            <span className='separador'></span>

            <section className='presentacion'>
                <Fade right>
                    <div className='presentacion-over-derecha Container'>
                        <span className='linea'></span>
                        <p className='presentacion-over-derecha-texto presentacion-over-derecha-texto-titulo'>Nuestro horno</p>
                        <p className='presentacion-over-derecha-texto presentacion-over-derecha-texto-marca'>Desde 1934</p>
                        <p className='presentacion-over-derecha-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida eu enim vitae suscipit. Morbi dictum metus in mauris ornare, consectetur fermentum augue pulvinar. Suspendisse ante tortor, congue vel dui nec, elementum iaculis quam.</p>
                    </div>
                </Fade>
                <img src="/img/horno1.jpg" className='presentacion-img'/>
            </section>
        </>
    )
}

export default HomeIntro;