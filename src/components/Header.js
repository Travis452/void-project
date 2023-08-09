import { Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './Searchbar';

const Header = () => {
    return (
        <Navbar sticky='top' expand='md'>
            <div className='navbar-container'>
                <div className='nav-left'>
                    <h1 className='navbar-text'>
                        Void{' '}
                    </h1>
                    <h5 className='navbar-text'>
                        <span className='nav-links'>
                            <a href='/upload'>Upload</a>
                            <a href='home'>Home</a>
                            <a href='/projects'>Projects</a>
                        </span>
                    </h5>
                </div>

                <SearchBar />

                <div className='nav-right'>
                    <a href='/profile'>
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <a href='/messages'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href='/notifications'>
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </div>
            </div>

            <NavbarBrand href='/'>

            </NavbarBrand>
        </Navbar>

    );
}
export default Header;