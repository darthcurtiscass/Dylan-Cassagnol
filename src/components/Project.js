import React from 'react';

function Project(props) {
    return (
    <div className="container text-center">
        <div className="row row-col w-50 mx-auto">
            <div className="row card bg-dark">
            
                <a href={props.link} className="btn btn-dark">
                    <img src={props.image} className="card-img-top" alt="project image"/>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.github} className="btn btn-danger">Github Repository</a>
                    </div>
                </a>
            </div>
        </div>
        <br/>
        <br/>
    </div>
    
    );
}

export default Project;





