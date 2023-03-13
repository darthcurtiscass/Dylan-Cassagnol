import React from 'react';

function Project(props) {
    return (
        <a href={props.link} >
            <h3>{props.title}</h3>
            <img src={props.image}/>
        </a>
    );
}

export default Project;