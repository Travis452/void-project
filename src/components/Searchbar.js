import { useState } from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        //performing search logic
        console.log('Searching for:', searchQuery);
    }

    return (
        <InputGroup className='search-bar'>
            <Input className='input-search'
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Button className='search-button' onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </Button>

        </InputGroup>
    );
};

export default SearchBar;