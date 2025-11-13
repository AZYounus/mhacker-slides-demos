import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Courses from './pages/Courses.jsx'
import Projects from './pages/Projects.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;