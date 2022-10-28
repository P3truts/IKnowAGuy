import React from 'react';
import '../css/HeaderTyping.css';
import Typed from 'typed.js';
import { useEffect } from 'react';


export const HeaderTyping = () => {

    const typed =() => {
        new Typed('#typed', {
            strings: ['paintings', 'renovations', 'cleaning', 'almost anything'],
            typeSpeed: 90,
            backSpeed: 10,
            loop: true,
            showCursor: false,
        });
    };

    useEffect(() => {
        typed();
      }, []);

    return (
        <>
            <div id='typed-strings'>
                <h1>
                    Find Handymen for <span id='typed'></span>
                </h1>
            </div>
        </>
    );
};