import React from "react";


function Header(props) {
    return (
        <header class="header">
        <a onClick={()=>{props.setCurrentPage('About')}} class="navigation-item flex1">About</a>
        <a onClick={()=>{props.setCurrentPage('Projects')}} class="navigation-item flex2">Work</a>
        <a onClick={()=>{props.setCurrentPage('Contact')}} class="navigation-item flex3">Contact</a>
</header>
    )
};

export default Header;