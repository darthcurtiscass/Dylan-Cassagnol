import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('About')
  function renderPage(){
    if(currentPage === "About") {
      return <About/>
    }
    if(currentPage === "Projects") {
      return <Projects/>
    }
    if(currentPage === "Contact") {
      return <Contact/>
    }
  }
  return (
    <div className="App">
      <Header setCurrentPage = {setCurrentPage}/>
      <main>
        <div class="flex">
          <article class="intro-content">
            <section class="intro-text">
              <img
                src="assets/images/Headshot.jpg"
                alt="profile pic"
                class="headshot"
              />
              <h1>Dylan Cassagnol</h1>
              <h1>Full-stack Web Developer</h1>
            </section>
          </article>

        {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
