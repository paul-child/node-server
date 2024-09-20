import React, { useEffect } from 'react';
import Note from './Note';

function Widget({name, note}) {

    useEffect(() => {
        console.log('Widget rendered!');
    }, [])
    
    return (
        <div id='widget'>
            <Note note={note} name={name} />
        </div>
    );
}

export default Widget;