import React from 'react';

import './input.scss'
const Input = ({searchValue, setSearcchValue}) => {
    return (
        <input
            className='search-elem'
            type="text" placeholder='введите название пиццы'
            value={searchValue}
            onChange={(e) => setSearcchValue(e.target.value)}
        />
    );
};

export default Input;