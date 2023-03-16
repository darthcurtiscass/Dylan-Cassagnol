import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume"
import { useState } from "react";
import "./scss/custom.scss"




function App() {
  const [currentPage, setCurrentPage] = useState('About')
  function renderPage(){
    if(currentPage === "About") {
      return <About setCurrentPage= {setCurrentPage}/>
    }
    if(currentPage === "Projects") {
      return <Projects/>
    }
    if(currentPage === "Contact") {
      return <Contact/>
    }
    if(currentPage === "Resume") {
      return <Resume />
    }
  }
  return (
    <div className="App bg-dark">
      <Header setCurrentPage = {setCurrentPage}/>
      <main>
        <div class="flex">
        {renderPage()}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
