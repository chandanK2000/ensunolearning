import React, { useState } from 'react';
import './DashBoardPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className='text-primary my-4'>Register Here</h3>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <form onSubmit={handleSubmit} className="p-3">
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="firstName">First Name<span>*</span></label>
                <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName">Last Name<span>*</span></label>
                <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password<span>*</span></label>
              <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username<span>*</span></label>
              <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="username" name="username" value={formData.username} onChange={handleChange} />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <button type="submit" className=" btn-block  register-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
