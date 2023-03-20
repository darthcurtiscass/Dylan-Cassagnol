import React from "react";
import headshot from "../images/Dylan-Cassagnol.jpg";
function About(props) {
  const dylanArr = [
    {
      name: "Dylan Cassagnol",
      description: "Full-stack Web Developer",
      headshot: headshot,
    },
  ];

  return (
    <section className="informative-text" id="about">
      <div className="container-fluid text-center bg-dark" style= {{backgroundColor: "#008b8b"}}>
        {dylanArr.map((data) => {
          return (
            <div>
               <h3>{data.name} </h3>
              <img src={data.headshot} className="img-fluid w-25 img-thumbnail border-dark"/>
             
              <h4>{data.description}</h4>
            </div>
          );
        })}
        <div className="card text-bg-secondary p-3 w-50 border-dark mb-3 mx-auto">
          <div className="card-body ">
            <p className="card-text">Dylan Cassagnol is a recent graduate of Denver University's well-respected
                                Full-stack Coding Bootcamp. He applies knowledge gained, from over six
                                years of expeirence in the film and art industries, to all of his
                                creative endeavors.</p>
            <a onClick={()=>{props.setCurrentPage('Projects')}} href="#" className="btn btn-dark">See his work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
