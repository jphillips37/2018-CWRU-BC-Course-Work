import React from 'react';
import "./style.css";

function Nav (props) {
    return (
        <nav>
            <h1>Score: {props.score}</h1>
            <p>{props.message}</p>
        </nav>
    );
};

export default Nav