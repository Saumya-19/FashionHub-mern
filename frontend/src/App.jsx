import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FemaleClothes from './pages/FemaleClothes';
import MaleClothes from './pages/MaleClothes';
import ChildrenClothes from './pages/ChildrenClothes';
import SignIn from './pages/SignIn';
import ProductDetail from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckOutPage';
import OrderPlaced from './pages/OrderPlaced';
import Signup from './pages/SignUp';
import OrderHistoryPage from './pages/OrderHistoryPage';

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />

      </Routes>
    </BrowserRouter>
  );
}

