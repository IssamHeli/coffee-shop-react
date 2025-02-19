import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Route
import coffeview from '../assets/coffeview.jpg'; // Import image from assets folder
import { ThemeContext } from '../contexts/ThemeContext';


const Home = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`home-container mt-5 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
      <img src='https://img.freepik.com/vecteurs-libre/fond-tableau-noir-cafe_23-2148907815.jpg?t=st=1738254931~exp=1738258531~hmac=479e2bed515f08ec87a9add81ccd6109d47e78d57c1ff6744e0c02e6c58d1b2c&w=2000' alt='Coffe thumbnail for Home Page' className='img-fluid'></img>

      <div className={`alert alert-${theme} text-center`}> {/* Added class for left column */}
          <h2 className="text-center">Welcome to Coffee Shop</h2>
          <p className="text-center">The perfect place to start your day.</p>
          <Link to="/menu" className="btn btn-success">
            Our Menu
          </Link>
        </div>

        <div className="container pb-3" >
          <div className="row"> {/* Use row for better layout */}
            <div className="col-md-6"> {/* Image on the left (medium screens and up) */}
              <img
                src={coffeview} // Replace with your image URL
                alt="Coffee Shop Interior"
                className="img-fluid rounded shadow" // Responsive image, rounded corners, shadow
              />
            </div>
            <div className="col-md-6 d-flex align-items-center"> {/* Text on the right, vertically centered */}
              <div> {/* Added a div for better text control */}
                <h2 className="text-center text-lg-start">Our Story</h2> {/* Responsive heading alignment */}
                <p className="lead"> {/* Added lead class for better typography */}
                  At Coffee Shop, we're passionate about serving the finest coffee. We source our beans from the best farms and roast them to perfection. We believe that a great cup of coffee can brighten your day and we're dedicated to providing you with the ultimate coffee experience. 
                </p>
                <p>
                  We are also committed to sustainability and ethical sourcing. We work closely with our farmers to ensure fair prices and environmentally responsible practices.  We believe in giving back to the community and supporting local initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

      
     
     
    </div>
  );
};

export default Home;