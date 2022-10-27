import React from 'react';
import { useState, useEffect } from 'react';
import AdCard from '../components/AdCard';
import { HeaderTyping } from '../components/HeaderTyping';
import '../css/Home.css';
import { SearchBar } from '../components/SearchBar';

export function Home() {
    const [ads, setAds] = useState([]);

    console.log(ads);

    const loader = async () => {
        const req = await fetch('ads');
        if (req.ok) {
            const res = await req.json();
            setAds(res);
        } else {
            console.log('req is not ok');
            setAds([]);
        }
    };

    useEffect(() => {
        loader();
    }, []);

    return (
        <>
            <HeaderTyping />
            <SearchBar setAds={setAds} />
            <h2 style={{ textAlign: 'left' }}>Ads</h2>
            <div className='ads-div container'>
                {(ads.length > 0 &&
                    ads.map((ad) => {
                        return <AdCard ad={ad} key={ad.id} />;
                    })) || (ads.length == 0 && <h3>No ads found!</h3>)}
            </div>
        </>
    );
}
