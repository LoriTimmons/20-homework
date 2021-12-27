import './App.css';
import  Header from "./components/Header";
import  Footer from "./components/Footer";
import  Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";


// like the body of html. Write the entire project here. START HERE. Use components 
function App() {
  return (
    <div>
    <Header/>
    <Aboutme/>
    <Projects/>
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
