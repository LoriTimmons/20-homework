import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactForm  from "./components/ContactMe/ContactMe";
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
      return <ContactForm />;
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
