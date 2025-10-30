import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index.html" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;