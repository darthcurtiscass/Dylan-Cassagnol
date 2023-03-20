import React from 'react';

function Career(props) {
    return (
    <div className="container text-center">
        <div className="row row-col mx-auto">
            <div className="row card">
                    <h4>{props.title}</h4>
                    <br/>
                    <h5>{props.company}</h5>
                    <br/>
                    <div className="card-body">
                    <ul className="card-title">
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





