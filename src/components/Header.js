import React from "react";
import logo from "../images/Number-three.jpg"
import '../scss/custom.scss'

function Header(props) {
    return (

    <nav class="navbar navbar-expand-lg" style= {{backgroundColor:"#008b8b"}}>
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <img src={logo} alt="Bootstrap" width="30" height="30"/>
            <div class = "navbar-brand">
            <a onClick={()=>{props.setCurrentPage('About')}} class="nav-link active" aria-current="page" href="#">Dylan Cassagnol</a>
            </div>
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
                <li class="nav-item">
                <a onClick={()=>{props.setCurrentPage('Resume')}} class="nav-link" href="#">Resume</a>
                </li>
            </ul>
            
            </div>
        </div>
    </nav>
// </header>
    )
};

export default Header;