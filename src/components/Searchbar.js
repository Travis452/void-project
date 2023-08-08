import { useState } from 'react';
import { InputGroup, Input, Button } from 'reactstrap';

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

            <Button color='primary' onClick={handleSearch}>
                Search
            </Button>

        </InputGroup>
    );
};

export default SearchBar;