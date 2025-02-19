import { React, useContext,useState } from 'react';
import { Table, Button,Modal} from 'react-bootstrap';
import { CartContext } from '../services/CartService';
import { ThemeContext } from '../contexts/ThemeContext';

const Cart = () => {
    const { theme } = useContext(ThemeContext);
    const { cartItems, removeFromCart, clearCart, addQuantity, removeQuantity } = useContext(CartContext);
    const [showClearCartModal, setShowClearCartModal] = useState(false); 

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };
    const handleClearCart = () => {
      setShowClearCartModal(true); // Show the modal
    };

    const confirmClearCart = () => {
        clearCart();
        setShowClearCartModal(false); // Hide the modal after confirmation
    };

    const cancelClearCart = () => {
        setShowClearCartModal(false); // Hide the modal if cancelled
    };
    return (
      <div className={`bg-${theme}`}>
        <section className="container mt-5">
            <br />
            {cartItems.length > 0 ? (
                <>
                    <Table variant={theme === 'dark' ? 'dark' : 'light'} striped bordered hover mt-5 responsive>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.product.id}>
                                    <td>{item.product.name}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Button
                                                variant={theme === 'dark' ? 'outline-danger' : 'outline-danger'} // Consistent button styling
                                                size="sm"
                                                onClick={() => removeQuantity(item.product.id)}
                                            >
                                                -
                                            </Button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <Button
                                                variant={theme === 'dark' ? 'outline-success' : 'outline-success'} // Consistent button styling
                                                size="sm"
                                                onClick={() => addQuantity(item.product.id)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </td>
                                    <td>${item.product.price.toFixed(2)}</td>
                                    <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="danger" // Keep "danger" variant for remove
                                            size="sm"
                                            onClick={() => removeFromCart(item.product.id)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            <tr className="mt-5">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h3>Total : </h3></td>
                            <td>
                              <div className="text-right">
                              <h3>${calculateTotal().toFixed(2)}</h3>
                              </div>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-end">
                        <Button variant="danger" onClick={handleClearCart} className="me-2"> {/* Button theme */}
                            Clear Cart
                        </Button>
                        <Button href='#/checkout' variant="success">
                            Proceed to Checkout
                        </Button>
                    </div>
                </>
            ) : (
                <div className={`alert alert-info mt-5 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}> {/* Alert theme */}
                    <p className="text-center">Your cart is empty.</p>
                </div>
            )}
            {/* Confirmation Modal */}
            <Modal show={showClearCartModal} onHide={cancelClearCart} centered> {/* Centered Modal */}
                <Modal.Header closeButton className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
                    <Modal.Title>Confirm Clear Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
                    Are you sure you want to clear your cart?
                </Modal.Body>
                <Modal.Footer className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
                    <Button variant="secondary" onClick={cancelClearCart}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmClearCart}>
                        Clear Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
        </div>
    );
};

export default Cart;