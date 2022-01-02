import './App.css';
import  Header from "./components/Header/Header";
import  Footer from "./components/Footer/Footer";
import  AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import react, {useState} from 'react';
import { render } from '@testing-library/react';


function App() {
  const [newPage, setNewPage] = useState("AboutMe")
  function renderPage () {
    if(newPage === "AboutMe") {
      return <AboutMe/>
    }else if (newPage === "Portfolio") {
      return <Projects/>
    }
    // else if (newPage === "ContactMe") {
    //   return <ContactMe/>
    // }else {
    //   return <Resume/>
    // }
  }
  return (
    <div>
    <Header setNewPage={setNewPage}/>

    <div>
      {renderPage()}
    </div>
    <Footer/>
    </div>
  );
}

export default App;

// Just build the one page component style 
// Read instructions carefully (See nav (sub component))
// look at webpages like sections
// Pages: look at the last activities of unit 20. HOw to render pages (components)
// For animates are material UI, antdesign (use this one maybe), see slack resorces 
// Import boot strap seperatlly ??? 
// if you use boot stramp for CSS import to indext.html before react 
// Each compoent gets its only folder....and within that Js/CSS
