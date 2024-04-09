import React, { useState } from 'react';
import './Careersfrom.css';

const Careersfrom = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    }
    if (!formData.role) {
      errors.role = 'Role is required';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className={`form-control border_bottom ${errors.name && 'is-invalid'}`} id="name" value={formData.name} onChange={handleChange} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className={`form-control ${errors.email && 'is-invalid'}`} id="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" className={`form-control border_bottom ${errors.phone && 'is-invalid'}`} id="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select className={`form-control ${errors.role && 'is-invalid'}`} id="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
              {errors.role && <div className="invalid-feedback">{errors.role}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="cv">Upload CV</label>
              <div className="custom-file">
                <input type="file" className={`custom-file-input border_bottom ${errors.cv && 'is-invalid'}`} id="cv" />
                <label className="custom-file-label" htmlFor="cv"></label>
              </div>
              {errors.cv && <div className="invalid-feedback">{errors.cv}</div>}
            </div>
            <button type="submit" className="send_message">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Careersfrom;
