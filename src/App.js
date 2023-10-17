import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { HeroBanner, About, Skills, Projects, Contact } from './components/page';

function App() {
  return (
   <>
      <Navbar />
      <HeroBanner />
      <About />
      <Skills />
      <Projects />
      <Contact />   
   </>

  );
}

export default App;
