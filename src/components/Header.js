import { Navbar, NavbarBrand } from 'reactstrap';
import SearchBar from './Searchbar';

const Header = () => {
    return (
        <Navbar sticky='top' expand='md'>

            <div className='navbar-container'>
                <h1 className='navbar-text'>Void</h1>
                <SearchBar />
            </div>

            <NavbarBrand href='/'>

            </NavbarBrand>
        </Navbar>

    );
}
export default Header;