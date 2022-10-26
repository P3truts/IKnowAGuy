import React from 'react';
import '../css/SearchBar.css';
import { useState } from 'react';


export const SearchBar = ({ setAds }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchAds = async (searchTerm) => {
        const req = await fetch(`ads/search/${(searchTerm)}`)
        if (req.ok) {
            var searchData = await req.json();
            setAds(searchData);
            console.log(searchData);
        } else {
            console.log("Request is nok");
            setAds([]);
        }
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


