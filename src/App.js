import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Resume from "./components/Resume/Resume";
import React, { useState } from "react";

function App() {
  const [newPage, setNewPage] = useState("AboutMe");
  function renderPage() {
    if (newPage === "AboutMe") {
      return <AboutMe />;
    } else if (newPage === "Portfolio") {
      return <Projects />;
    } else if (newPage === "ContactMe") {
      return <ContactMe />;
    } else {
      return <Resume />;
    }
  }
  return (
    <div>
      <Header setNewPage={setNewPage} />

      <div>{renderPage()}</div>
      <Footer />
    </div>
  );
}

export default App;

// Just build the one page component style
// Import boot strap seperatlly ???
// if you use boot stramp for CSS import to indext.html before react
// Each compoent gets its only folder....and within that Js/CSS
// in mods check out the flex row and thumbnail mx 1 css
