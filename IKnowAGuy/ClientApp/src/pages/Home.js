import React from 'react';
import { useState, useEffect } from 'react';
import { AdCard } from '../components/AdCard';
import { HeaderTyping } from '../components/HeaderTyping';
import './Home.css';
import { SearchBar } from '../components/SearchBar';

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
            <h2 style={{ textAlign: 'left' }}>Services</h2>
            <div className='ads-div container'>
                {ads.map((ad, index) => {
                    return <AdCard ad={ad} index={index} key={index} />;
                })}
            </div>
        </>
    );
}
