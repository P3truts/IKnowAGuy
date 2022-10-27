import React from 'react';
import { useState, useEffect } from 'react';

export function AdDetails() {
    const [ad, setAd] = useState([]);

    console.log(ad);

    const loader = async () => {
        // const req = await fetch(`ads/${adId}`);
        const req = await fetch(`ads/${1}`);
        if (req.ok) {
            const res = await req.json();
            setAd(res);
        } else {
            console.log('req is not ok');
            setAd([]);
        }
    };

    useEffect(() => {
        loader();
    }, []);

    return (
        <>
            <h2 style={{ textAlign: 'left' }}>Ad Details</h2>
            <div className='ads-div container'>
                {(ad.length > 0 &&
                    ad.map((ad) => {
                        return <div>{ad.name}</div>;
                    })) || (ad.length == 0 && <h3>No ad found!</h3>)}
            </div>
        </>
    );
}