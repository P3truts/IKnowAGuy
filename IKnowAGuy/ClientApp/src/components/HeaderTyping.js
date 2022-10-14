import React from 'react';
import '../css/HeaderTyping.css';
import Typed from 'typed.js';

export const HeaderTyping = () => {
    return (
        <>
            <div id='typed-strings'>
                <h1>
                    Find Handymans for <span id='typed'></span>
                </h1>
            </div>
        </>
    );
};

window.onload = function () {
    new Typed('#typed', {
        strings: ['paintings', 'renovations', 'cleaning', 'almost anything'],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true,
        showCursor: false,
    });
};
