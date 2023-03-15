import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#008b8b" }}>
            <ul className="list-inline mb-0 text-center">
                <li className="list-inline-item mr-3">
                    <a href="https://github.com/darthcurtiscass">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="bg-dark"/>
                    </a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="https://www.linkedin.com/in/dylan-cassagnol-32480223b//">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="bg-dark"/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://stackoverflow.com/users/21259792/darthagnan">
                        <FontAwesomeIcon icon={faStackOverflow} size="2x" className="bg-dark"/>
                    </a>
                </li>
            </ul>
        </div> 
    )
}

export default Footer;