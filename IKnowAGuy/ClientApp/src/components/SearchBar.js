import React from 'react';
import '../css/SearchBar.css';

export const SearchBar = () => {
    return (
        <div class='input-group input-group-lg search-bar'>
            <input
                type='text'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-lg'
            />
            <button type='button' class='btn btn-info'>
                Search
            </button>
        </div>
    );
};
