import React from 'react';

function Header({ title, caption }) {
    return (
        <div>
            <Title title={title} />
            <p>{caption}</p>
        </div>
    );
}

function Title({title}) {
    return <h1>{title}</h1>
}

export default Header;