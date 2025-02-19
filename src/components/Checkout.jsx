import React, { useContext, useState,useEffect } from 'react';
import { Table, Button, Form, Row, Col, Card } from 'react-bootstrap';
import { CartContext } from '../services/CartService';
import { toast } from 'react-toastify';
import { ThemeContext } from '../contexts/ThemeContext';

const Checkout = () => {
  const { theme } = useContext(ThemeContext);
  const { cartItems ,clearCart} = useContext(CartContext);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false); // Track permission
  const [ setUserLocation] = useState(null);
  const [setAddress] = useState(""); // State for the formatted address
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const newErrors = { ...errors };
    delete newErrors[e.target.name]; // Remove previous error for this field

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate all required fields
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    }else if (formData.cardNumber.length < 16) {
        newErrors.cardNumber = 'Card number must be 16 digits';
    }else if (formData.cardNumber.length > 16) {
        newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formData.cardExpiry) {
      newErrors.cardExpiry = 'Card expiry date is required';
    }else if (formData.cardExpiry.length < 5) {
        newErrors.cardExpiry = 'Card expiry date must be in MM/YY format';
    }else if (formData.cardExpiry.length > 5) {
        newErrors.cardExpiry = 'Card expiry date must be in MM/YY format';
    }
    if (!formData.cardCvc) {
      newErrors.cardCvc = 'Card CVC is required';
    }else if (formData.cardCvc.length < 3) {
        newErrors.cardCvc = 'Card CVC must be 3 digits';
    }else if (formData.cardCvc.length > 3) {
        newErrors.cardCvc = 'Card CVC must be 3 digits';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                        .then(response => response.json())
                        .then(responseData => {
                            if (responseData.address) {
                                const formattedAddress = [
                                    responseData.address.road || '',
                                    responseData.address.house_number || '',
                                    responseData.address.neighbourhood || '',
                                    responseData.address.city || '',
                                    responseData.address.state || '',
                                    responseData.address.postcode || '',
                                    responseData.address.country || '',
                                ].filter(part => part).join(', ');

                                setAddress(formattedAddress); // Set the formatted address
                                setFormData(prevFormData => ({ ...prevFormData, address: formattedAddress })); // Update form data using callback
                                setUserLocation({ latitude, longitude });

                                if (!responseData.address.road) {
                                    console.warn("Road information not found for this location.");
                                }
                            } else {
                                console.warn("No address found for this location.");
                            }
                        })
                        .catch(error => {
                            console.error("Error getting address:", error);
                        });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

      // Check for existing permission or prompt for it
      if (navigator.permissions) { // Check if Permissions API is supported
          navigator.permissions.query({ name: 'geolocation' }).then(result => {
              if (result.state === 'granted') {
                  setLocationPermissionGranted(true);
                  getLocation(); // Get location immediately if already granted
              } else if (result.state === 'prompt') {
                  // Prompt the user for permission.  The actual prompt is handled by the browser.
                  navigator.geolocation.getCurrentPosition(() => {
                      setLocationPermissionGranted(true);
                      getLocation(); // Get location after successful prompt
                  }, () => {
                      setLocationPermissionGranted(false); // Permission denied
                      // Handle denied permission (e.g., show a message)
                  });
              } else { // 'denied'
                setLocationPermissionGranted(false);
                // Handle denied permission
              }
          });
      } else { // Permissions API not supported
          // Fallback for browsers that don't support the Permissions API
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(() => {
                  setLocationPermissionGranted(true);
                  getLocation(); // Get location after successful prompt
              }, () => {
                  setLocationPermissionGranted(false); // Permission denied
                  // Handle denied permission (e.g., show a message)
              });
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
      }
  },);
  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    if (validateForm()) {
        setFormData({
            name: '',
            email: '',
            address: '',
            cardNumber: '',
            cardExpiry: '',
            cardCvc: '',
        });
        clearCart(); 
        toast.success('Order placed successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }else{
       return;
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className={`mt-5 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
    <div className='container '>
    <div className="checkout-container mt-6"> {/* Added class */}
      <div className="checkout-content"> {/* Added wrapper div */}
      <h2 className="text-center mt-4">Checkout</h2> {/* Added heading */}
        <Form onSubmit={handleSubmit} className="checkout-form"> {/* Added class */}
          <Row>
            <Col md={6}>
            <Card className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'} themed-border-card`}>
                <Card.Header className='themed-border-card'>Order Summary</Card.Header> {/* Added class */}
                <Card.Body >
                  <Table striped bordered hover responsive variant={theme}> {/* Added responsive */}
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qty</th> {/* Shortened Quantity to Qty */}
                        <th>Price</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.product.id}>
                          <td>{item.product.name}</td>
                          <td>{item.quantity}</td>
                          <td>${item.product.price.toFixed(2)}</td>
                          <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-end"> {/* Flexbox for alignment */}
                    <h3>Total:</h3> <h2 className="ml-2">${calculateTotal().toFixed(2)}</h2> {/* Added margin left */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
            <Card className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'} themed-border-card`}>
                <Card.Header className='themed-border-card' >Shipping & Payment</Card.Header> {/* Combined header */}
                <Card.Body > {/* Added Card.Body */}
                  <h3 className="mb-3">Shipping Information</h3>
                  <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                isInvalid={!!errors.name} 
              />
              <Form.Text className="text-danger">{errors.name}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                isInvalid={!!errors.email} 
              />
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                placeholder={locationPermissionGranted ? "Fetching Address..." : "Enter your address"}
                name="address"
                value={formData.address} // Use formData.address here!
                onChange={handleChange}
                isInvalid={!!errors.address}
            />
            <Form.Text className="text-danger">{errors.address}</Form.Text>
            {!locationPermissionGranted && (
                <Form.Text>Please grant location permission to automatically fill your address.</Form.Text>
            )}
        </Form.Group>
                  <h3 className="mt-4 mb-3">Payment Information</h3> {/* Added margin top */}
                  <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Enter card number" 
                name="cardNumber" 
                value={formData.cardNumber} 
                onChange={handleChange} 
                isInvalid={!!errors.cardNumber} 
            />
            <Form.Text className="text-danger">{errors.cardNumber}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Card Expiry</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="MM/YY" 
                name="cardExpiry" 
                value={formData.cardExpiry} 
                onChange={handleChange} 
                isInvalid={!!errors.cardExpiry} 
            />
            <Form.Text className="text-danger">{errors.cardExpiry}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>CVC</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="CVC" 
                name="cardCvc" 
                value={formData.cardCvc} 
                onChange={handleChange} 
                isInvalid={!!errors.cardCvc} 
            />
            <Form.Text className="text-danger">{errors.cardCvc}</Form.Text>
            </Form.Group>
                  <div className="d-grid mt-3"> {/* Added margin top */}
                    <Button variant="success" type="submit">
                      Place Order
                    </Button>
                  </div>
                </Card.Body> {/* Close Card.Body */}
              </Card> {/* Close Card */}
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Checkout;