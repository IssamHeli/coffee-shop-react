import { React,useContext} from 'react';
import DataService from '../services/DataService';
import ProductCard from './ProductCard'; // Assuming ProductCard is exported correctly
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { motion} from 'framer-motion';
import Mennubanner from '../assets/MenuBanner.png';
import { ThemeContext } from '../contexts/ThemeContext';

const Menu = () => {

  const { theme } = useContext(ThemeContext);
  const products = DataService.getProducts();


  return (
    <div className={`mt-5 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>

    <Container className="mt-5 "> 

      
      <img src={Mennubanner} alt="Banner for menu page" className='img-fluid'></img>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
        {products.map((product, index) => (
          <Col key={product.id}>
            <motion.div 
              initial={{ opacity: 0, y: 100}} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: index * 0.1 }} // Stagger animations
            >
              <ProductCard product={product} /> 
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>

  );
};

export default Menu;