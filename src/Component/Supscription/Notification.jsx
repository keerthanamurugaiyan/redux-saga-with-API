import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postProduct } from '../../Redux/Action/Notifi_Action';
import { FiBell } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationBell from './NotificationBell';

function Notification() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    qty: '',
    price: ''
  });
  const [successMessage, setSuccessMessage] = useState(false); // 🟢 New

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: parseInt(formData.id),
      name: formData.name,
      qty: parseInt(formData.qty),
      price: parseInt(formData.price)
    };
    dispatch(postProduct(product));
    setFormData({ id: '', name: '', qty: '', price: '' });

    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000); // Hide after 3s
  };

  return (
    <div className="d-flex justify-content-center align-self-center position-relative">

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="position-absolute top-0 mt-3 p-3 rounded-4 shadow text-white fw-bold"
            style={{
              backgroundColor: "#4c1a56",
              zIndex: 999,
              transform: "translateX(-50%)"
            }}
          >
            ✅ Product posted and notification sent.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className='form p-4 rounded-5 mt-5' autoComplete='off' style={{ backgroundColor: "#7ba373", width: "30%" }}>

        {/* // Inside return: */}
        <div className="text-end px-4">
          <NotificationBell />
        </div>

        <h1 className='text-center' style={{ color: "#4c1a56", fontWeight: "bold" }}>Post Product</h1>

        <div>
          <label htmlFor="name" className="form-label text-light fw-bold mt-3">Name:</label>
          <input type="text" className="form-control" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="qty" className="form-label text-light fw-bold mt-3">Quantity:</label>
          <input type="number" className="form-control" name="qty" placeholder="Quantity" value={formData.qty} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="price" className="form-label text-light fw-bold mt-3">Price:</label>
          <input type="number" className="form-control" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="text-center mt-5">
          <button type="submit" className="btn fw-bold" style={{ backgroundColor: "#d8bc3e" }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Notification;


