// ProductForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postProduct } from '../../Redux/Action/Notifi_Action';
import { Dropdown, Badge } from 'react-bootstrap';
import { FiBell } from 'react-icons/fi';

function Notification() {
  const notifications = useSelector((state) => state?.notifications?.notifications);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    qty: '',
    price: ''
  });

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
    setFormData({ id: '', name: '', qty: '', price: '' }); // clear form
  };

  return (

    <div className="d-flex justify-content-center align-self-center">

      <form onSubmit={handleSubmit} className='form p-4 rounded-5 mt-5' autoComplete='off' style={{ backgroundColor: "#7ba373", width: "30%" }}>

        <div className="position-relative d-inline-block">
          <FiBell size={32} className="text-light" />
          {notifications.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notifications.length}
            </span>
          )}
        </div>

        <h1 className='text-center' style={{ color: "#4c1a56", fontWeight: "bold" }}>Post Product</h1>

        <div className="">
          <label htmlFor="name" className="form-label text-light fw-bold mt-3">Name:</label>

          <input type="text"
            className="form-control" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="">
          <label htmlFor="email" className="form-label text-light fw-bold mt-3">Quantity:</label>

          <input type="number"
            className="form-control" name="qty" placeholder="Quantity" value={formData.qty} onChange={handleChange} required />
        </div>
        <div className="">
          <label htmlFor="password" className="form-label text-light fw-bold mt-3">Price:</label>

          <input type="number"
            className="form-control" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="text-center mt-5">
          <button type="submit" className="btn fw-bold" style={{ backgroundColor: "#d8bc3e" }}>Submit</button>
        </div>
      </form>
    </div>

  );
}

export default Notification;