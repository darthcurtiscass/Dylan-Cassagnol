import React from "react";
import Project from "../components/Project";
import dndImg from "../images/dnd-ss.png"
import recipeImg from "../images/Recipesy.png"
import pgImg from "../images/pg.png"
import horiseonImg from "../images/horiseon.png"
// import recipeImg from ""

function Projects(props) {
    const projectsArr = [
        {
            title: "Dungeons & Dragons Player Utility",
            link: "https://boiling-ridge-38547.herokuapp.com/homepage",
            image: dndImg,
            github:"https://github.com/darthcurtiscass/theBeholder",
        },
        {
            title: "Recipesy",
            link: "https://jcg0.github.io/project-1-recipesy/",
            image: recipeImg,
            github: "https://github.com/jcg0/project-1-recipesy",
            
        },
        {
          title: "Random Password Generator",
          link: "https://darthcurtiscass.github.io/DCC-password-generator/",
          image: pgImg,
          github: "https://github.com/darthcurtiscass/DCC-password-generator"
        },
        {
            title: "Horiseon Refactoring",
            link: "https://darthcurtiscass.github.io/Horiseon-main-page/",
            image: horiseonImg,
            github: "https://github.com/darthcurtiscass/Horiseon-main-page",

        },

    ]

  return (
    <section >
      <h2>My Work</h2>
      <div class="work">
        {
            projectsArr.map(project => {
                return (
                    <Project title = {project.title} link = {project.link} image= {project.image} github = {project.github} />

                )
            })
        }
      </div>
    </section>
  );
}

export default Projects;
