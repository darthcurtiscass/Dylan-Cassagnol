import React from "react";
import '../scss/custom.scss'

function Header(props) {
    return (

    <nav class="navbar navbar-expand-lg" style= {{backgroundColor:"#008b8b"}}>
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <img src="../images/Rhythm.png" alt="Bootstrap" width="30" height="24"/>
            <ul class="navbar-nav">
                <li class="nav-item">
                <a onClick={()=>{props.setCurrentPage('About')}} class="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item">
                <a onClick={()=>{props.setCurrentPage('Projects')}} class="nav-link" href="#">Work</a>
                </li>
                <li class="nav-item">
                <a onClick={()=>{props.setCurrentPage('Contact')}} class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
// </header>
    )
};

export default Header;