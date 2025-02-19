import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartContext } from '../services/CartService';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faShoppingBasket, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar 
      bg={theme === 'light' ? 'light' : 'dark'} 
      variant={theme === 'light' ? 'light' : 'dark'} 
      expand="lg" 
      className="shadow-sm fixed-top" 
      style={{ backgroundColor: theme === 'light' ? '#f8f9fa' : '#212529' }} 
    >
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faCoffee} className="text-success" /> 
          <span className="text-brand">Coffee Shop</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="menu">Menu</Nav.Link>
            <Nav.Link href="ContactUs">ContactUs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="checkout">
              <FontAwesomeIcon icon={faShoppingBasket} className="me-2" />
              Checkout 
            </Nav.Link>
            <Nav.Link href="cart">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              Cart ({cartItems.length}) 
            </Nav.Link>
            <NavDropdown title={theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={toggleTheme}>Toggle Theme</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;