import './card.css';
import referencia from '../../assets/referencia.jpg'

function Card () {

    return (
        <div className="container">
            <h1 className='title'>Negocios de Granos</h1>
            <img src={referencia} className="referencia" />
            <div className='info-div'>
                <h2 className='info-title'>Hola, <span>Agrosud</span>!</h2>
                <p className='info-text'>Desde Negocios de Granos estamos ofreciendo</p>
                <p className='info-text'>soja con un</p>
                <div className='info-descuento'>
                    <p>20%</p>
                </div>
                
                <p className='info-text'>de descuento.</p>
            </div>
            <a className='button' href="https://wa.me/+5491132575447">Contactate con tu operador</a>
        </div>
    );
}

export default Card;
