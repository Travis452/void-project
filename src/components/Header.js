import { useState } from 'react';
import { Navbar, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Navbar sticky='top' expand='md'>
            <div className='navbar-container'>
                <div className='nav-left'>
                    <h1 className='navbar-text'>
                        Void{' '}
                    </h1>
                    <h5 className='navbar-text'>
                        <span className='nav-links'>
                            <Link to='/'>Home</Link>
                            <Link to='/upload'>Upload</Link>

                        </span>
                    </h5>
                </div>

                <SearchBar />



                <div className='nav-right'>

                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle tag='span'>

                            <FontAwesomeIcon icon={faUser} />

                        </DropdownToggle>
                        <DropdownMenu className='profile-dropdown' right>
                            <DropdownItem>
                                <Link to='/projects'>Projects</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/edit-profile'>Edit Profile</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link to='/sign-out'>Sign Out</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Link to='/messages'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link to='/notifications'>
                        <FontAwesomeIcon icon={faBell} />
                    </Link>
                </div>
            </div>

            <NavbarBrand href='/'>

            </NavbarBrand>
        </Navbar>

    );
}
export default Header;