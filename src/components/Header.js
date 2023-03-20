import React from "react";
import logo from "../images/Number-three.jpg"
import '../scss/custom.scss'

function Header(props) {
    return (

    <nav className="navbar navbar-expand-lg" style= {{backgroundColor:"#008b8b"}}>
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <img src={logo} alt="Bootstrap" width="30" height="30"/>
            <div className = "navbar-brand">
            <a onClick={()=>{props.setCurrentPage('About')}} className="nav-link active" aria-current="page" href="#">Dylan Cassagnol</a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                <a onClick={()=>{props.setCurrentPage('About')}} className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                <a onClick={()=>{props.setCurrentPage('Projects')}} className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                <a onClick={()=>{props.setCurrentPage('Contact')}} className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                <a onClick={()=>{props.setCurrentPage('Resume')}} className="nav-link" href="#">Resume</a>
                </li>
            </ul>
            
            </div>
        </div>
    </nav>
// </header>
    )
};

export default Header;