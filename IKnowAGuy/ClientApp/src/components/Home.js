import React from 'react';
import { useState, useEffect } from 'react';
import { Ad } from './Ad';
import { HeaderTyping } from './HeaderTyping';
import '../css/Home.css';
import { SearchBar } from './SearchBar';

export function Home() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const loader = async () => {
            const req = await fetch('ads');
            if (req.ok) {
                const res = await req.json();
                console.log(res);
                setAds(res);
            } else {
                console.log('req is not ok');
            }
        };

        loader();
    }, []);

    return (
        <>
            <HeaderTyping />
            <SearchBar />
            <h2 style={{ textAlign: 'left' }}>Ads</h2>
            <div className='ads-div container'>
                {ads.map((ad, index) => {
                    return <Ad ad={ad} index={index} key={index} />;
                })}
            </div>
        </>
    );
}
