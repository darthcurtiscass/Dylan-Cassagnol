import React from 'react';

function Project(props) {
    return (
    <div class="container text-center">
        <div class="row row-col w-50 mx-auto">
            <div class="row card bg-dark">
            
                <a href={props.link} class="btn btn-dark">
                    <img src={props.image} class="card-img-top" alt="project image"/>
                    <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    </div>
                Visit</a>
            </div>
        </div>
        <br/>
        <br/>
    </div>
    
    );
}

export default Project;





