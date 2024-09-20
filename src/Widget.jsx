import React, { useEffect, useState } from 'react';
import Header from './Header';

const REQUEST_URL = 'https://dog.ceo/api/breed/airedale/images/random';

/**
 * Async fetch function that returns a random dog photo
 * 
 * @returns {string} - url of photo
 */
const gettaBoi = async () => {
    const resp = await fetch(REQUEST_URL);  
    return resp.json();
};

function Widget({title, caption}) {
    const [boi, setBoi] = useState('');

    /**
     * When component mounts (on client) fetch dog and set into component state
     */
    useEffect(() => {
        const goFetch = async () => {
            const {message} = await gettaBoi();
            setBoi(message);
        };
      
        goFetch()
    }, [])
    
    return (
        <>
            <link rel="stylesheet" href="/styles.css"></link>
            <div id='widget'>
                <Header 
                    title={title} 
                    caption={caption} 
                />
                <div className="dog">
                    <img src={boi} />
                </div>
            </div>
        </>
    );
}

export default Widget;