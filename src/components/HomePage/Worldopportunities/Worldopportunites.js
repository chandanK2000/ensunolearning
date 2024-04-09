import React from 'react';
import './Worldopportunities.css';

const Worldopportunites = () => {
  return (
    <div className="world-opportunities-container">
      {/* Left Section */}
      <div className="left-section">
        <h3>A world of opportunities is<br/> waiting for you!</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input type="text" id="number" name="number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group captcha-group">
            <label htmlFor="captcha">6 + 7 =</label>
            <input type="text" id="captcha" name="captcha" />
            <button type="submit">Submit</button>

          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src="https://ensuenolearning.com/wp-content/uploads/2022/03/unsplash_y5_mFlLMwJk-min.png" alt="Opportunity" />
      </div>
    </div>
  );
}

export default Worldopportunites;
