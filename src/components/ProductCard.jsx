import React, { useContext,} from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../services/CartService';
import { toast } from 'react-toastify';
import { ThemeContext } from '../contexts/ThemeContext';


const ProductCard = ({ product, isDarkMode }) => {
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);
  var productadded = product.name;
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(productadded + ' added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  }; // Empty dependency array for cleanup effect

  return (
    <Card className={`${theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} `}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
        <button
          className='btn btn-success'
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;