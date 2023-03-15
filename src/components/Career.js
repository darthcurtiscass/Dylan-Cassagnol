import React from 'react';

function Career(props) {
    return (
    <div class="container text-center">
        <div class="row row-col mx-auto">
            <div class="row card">
                    <h4>{props.title}</h4>
                    <br/>
                    <h5>{props.company}</h5>
                    <br/>
                    <div class="card-body">
                    <ul class="card-title">
                        <li>{props.duties}</li>
                    </ul>
                    </div>
            </div>
        </div>
        <br/>
        <br/>
    </div>
    
    );
}

export default Career;





