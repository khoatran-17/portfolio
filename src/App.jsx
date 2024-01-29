import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <header className="fullView" id="Home">
        <Navbar />
        <Hero />
      </header>

      <main>
        <section className="fullView" id="Skills">
          <Skills />
        </section>

        <Projects />

        <section className="fullView" id="Contact">
          <Contact />
        </section>
      </main>

      {/* <footer>
        <p>Icon made by Roundicons/Freepik from www.flaticon.com.</p>
        <p>SVG made by Chanut is Industries from www.svgrepo.com.</p>
      </footer> */}
    </div>
  );
}

export default App;
