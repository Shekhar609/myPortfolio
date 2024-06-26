import './App.css';
import Banner from './Components/Banner';
import CustomNavbar from './Components/CustomNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import  Footer  from './Components/Footer';
//aaa


function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
