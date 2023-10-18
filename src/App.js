import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { HeroBanner, About, Skills, Projects, Contact, Footer } from './components/page';

function App() {
  return (
   <>
      <Navbar />
      <HeroBanner />
      <About />
      <Skills />
      <Projects />
      <Contact />  
      <Footer /> 
   </>

  );
}

export default App;
