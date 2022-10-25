import React from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className='input-group input-group-lg search-bar'>
            <input
                type='text'
                className='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-lg'
            />
            <button type='button' className='btn btn-info'>
                Search
            </button>
        </div>
    );
};
