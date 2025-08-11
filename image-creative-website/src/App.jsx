import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App