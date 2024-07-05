import About from "./components/About"
import Contact from "./components/Contact"
import Facts from "./components/Facts"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
    <Nav />
    <Hero />
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
    </main>
    <Contact />
    <Footer />
    </>
  )
}

export default App
