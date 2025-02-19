import {React,useState,useContext } from 'react';
import { toast } from 'react-toastify';
import { Form,Container } from 'react-bootstrap';

import { ThemeContext } from '../contexts/ThemeContext';

const ContactUS = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error for the changed field immediately
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validateform(); // Store validation result
    if (Object.keys(validationErrors).length === 0) { // Check if there are no errors
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setErrors(validationErrors); // Set the errors to display
      return;
    }
  };

  const Validateform = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    return newErrors; // Return the errors object
  };

  return (
    <div className={`mt-5 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>

    <Container className="mt-5" >
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit} className="modern-form">
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
              <Form.Label>message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter your message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                isInvalid={!!errors.message} 
              />
              <Form.Text className="text-danger">{errors.message}</Form.Text>
            </Form.Group>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </Form>
    </Container>
    </div>

  );
};

export default ContactUS;