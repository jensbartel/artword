import { Link } from 'react-router-dom';
import logo from '../../img/logo_01.jpg';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* <div className='wordmark'>artword UG (haftungsbeschränkt)</div> */}
            <div >
                <img src={logo} alt='' className='logo'/>
            </div>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                {/* <Link to='/thoughts'>Thoughts</Link> */}
                <Link to='/about'>About</Link>
                <Link to='/about'>EN/FR</Link>
            </div>
        </div>
    );
};

export default Navbar;
