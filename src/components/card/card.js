import './card.css';
import referencia from '../../assets/referencia.jpg';

function Card () {

    return (
        <div className="container">
            <h1 className='title'>Negocios de Granos</h1>
            <img src={referencia} className="referencia" />
            <div className='info-div'>
                <h2 className='info-title'>Hola, <span>Agrosud</span>!</h2>
                <p className='info-text'>
                    Desde Negocios de Granos estamos ofreciendo <br></br> 
                    <strong>SOJA</strong> con un
                </p>
                <div className='info-descuento'>
                    <div className='descuento-container'>
                        <p className='descuento-number'>20%</p>
                        <p className='descuento-texto'>de descuento.</p>
                    </div>
                    <div className='counter-container'>
                        <p className='counter-title'>Finaliza en</p>
                        <div className='counter-clock'>
                            <p className='time'>3</p><p className='time'>7</p>
                            <p> : </p>
                            <p className='time'>0</p><p className='time'>7</p>
                            {/* 04:37:07 */}
                        </div>
                    </div>
                </div>
                <a className='button' href="https://wa.me/+5491132575447">Contactate con tu operador</a>
            </div>
        </div>
    );
}

export default Card;
