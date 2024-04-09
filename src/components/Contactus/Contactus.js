import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import './Contactus.css';

const Contactus = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');

    if (!fullName || !email || !phone || !address) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', {
      fullName,
      email,
      phone,
      address
    });

    // Further submission logic can be added here
  };

  return (
    <div>
      <div className="banner">
        <h1 className="banner-heading animate__animated animate__heartBeat">Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-block">
          <div className="icon">
            <FaMobileAlt />
          </div>
          <div className="info">
            <h6>Call Us</h6>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="contact-block visit-us">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <div className="info">
            <h6>Visit Us</h6>
            <p>324, SAI COMMERCIAL, BKVS DEVSHI MARG, GOVANDI STATION ROAD, DEONAR, MAHARASHTRA 400088</p>
          </div>
        </div>
        <div className="contact-block">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="info">
            <h6>Email Us</h6>
            <p>example@example.com</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-lg-6">
            <form className='form_section' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control fullname" id="fullName" name="fullName" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" required />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea className="form-control" id="address" name="address" rows="3" required></textarea>
              </div>

              <button type="submit" className="send_message">Send Message</button>
            </form>
          </div>

          {/* Map Section */}
          <div className="col-lg-6">
            {/* Embedded map */}
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31681.16486282252!2d-122.41962661977538!3d37.774929499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e1c5ae29a3%3A0x5c60c18a963dd8d7!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1647330064511!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
