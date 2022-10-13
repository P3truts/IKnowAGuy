import React from 'react';
import { useState, useEffect } from 'react';
import { Ad } from './Ad';

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
        <div className='ads-list'>
            <h2>Ads</h2>
            <div>
                {ads.map((ad, index) => {
                    return (
                        <li key={index}>
                            <Ad ad={ad} />
                        </li>
                    );
                })}
            </div>
        </div>
    );
}
