import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ContactUs from './components/ContactUS';
import Footer from './components/Footer';
import { CartProvider } from './services/CartService'; // Import CartProvider
import { ToastContainer } from 'react-toastify'; 
import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedRoute from './components/AnimatedRoute';

function App() {
  return (
    <Router>
      <ThemeProvider>
      <CartProvider> 
        <Header />
        <main>
            <Routes>
              <Route path="/" element={<HomeWrapper/>} />
              <Route path="/menu" element={<MenuWrapper/>} />
              <Route path="/cart" element={<CartWrapper/>} />
              <Route path="/checkout" element={<CheckoutWrapper/>} />
              <Route path="/ContactUs" element={<ContactUsWrapper/>} />
            </Routes>
          </main>
       <Footer/>
        <ToastContainer /> {/* Add ToastContainer at the end */}
      </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

const HomeWrapper = () => <AnimatedRoute><Home /></AnimatedRoute>;
const MenuWrapper = () => <AnimatedRoute><Menu /></AnimatedRoute>;
const CartWrapper = () => <AnimatedRoute><Cart /></AnimatedRoute>;
const CheckoutWrapper = () => <AnimatedRoute><Checkout /></AnimatedRoute>;
const ContactUsWrapper = () => <AnimatedRoute><ContactUs /></AnimatedRoute>;

export default App;