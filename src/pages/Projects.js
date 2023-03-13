import React from "react";
import Project from "../components/Project";
import image from "../images/dnd-ss.png"

function Projects(props) {
    const projectsArr = [
        {
            title: "Dungeons & Dragons Player Utility",
            link: "https://boiling-ridge-38547.herokuapp.com/homepage",
            image: "../../pub",
            github:image,
        },
        {
            title: "Title 2",
            link: "http://google.com",
            image: "image",
            github: "",
            
        },
        {
            title: "Title 3",
            link: "http://google.com",
            image: "image",
            github: "",

        },

    ]

  return (
    <section >
      <h2>My Work</h2>
      <div class="work">
        {/* <a href="https://boiling-ridge-38547.herokuapp.com/homepage" class="work-item3">
          <h3>Dnd Player Utility</h3>
        </a>
        <a href="https://jcg0.github.io/project-1-recipesy/" class="work-item2">
          <h3>Recipeasy</h3>
        </a>
        <a href="https://darthcurtiscass.github.io/Horiseon-main-page/" class="work-item1">
          <h3>Horiseon Refactoring</h3>
        </a> */}
        {
            projectsArr.map(project => {
                return (
                    <Project title = {project.title} link = {project.link} image= {project.image}/>

                )
            })
        }
        <a class="work-item4">Placeholder</a>
      </div>
    </section>
  );
}

export default Projects;
