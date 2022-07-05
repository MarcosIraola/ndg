import './navbar.css';
import logo from '../../assets/logo.png'

function Navbar () {

    return (
        <div className='navbar-container'>
            <img src={logo} className="navbar-logo"/>
        </div>
    )
}

export default Navbar;