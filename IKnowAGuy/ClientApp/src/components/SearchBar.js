import React from 'react';
import '../css/SearchBar.css';
import { useState, useEffect } from 'react';
import { event } from 'jquery';


export const SearchBar = ({ setAds }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchAds = async (searchTerm) => {
        const resp = await fetch(`ads/search/${(searchTerm)}`)
        var searchData = await resp.json();
        console.log(searchData);
        setAds(searchData);
    };

    return (
        <div className='input-group input-group-lg search-bar'>
            <input
                type='text'
                className='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-lg'
                placeholder='Search for ads'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='button' className='btn btn-dark' onClick={() => searchAds(searchTerm)}>
                Search
            </button>
        </div>
    );
};


