import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Concept from './pages/Concept';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/concept" element={<Concept />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;