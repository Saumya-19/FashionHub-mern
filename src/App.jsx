import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FemaleClothes from './pages/FemaleClothes';
import MaleClothes from './pages/MaleClothes';
import ChildrenClothes from './pages/ChildrenClothes';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/female" element={<FemaleClothes />} />
        <Route path="/male" element={<MaleClothes />} />
        <Route path="/children" element={<ChildrenClothes />} />
      </Routes>
    </BrowserRouter>
  );
}

