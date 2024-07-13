import React from "react";
import "./registrationForm.css"; // Import the CSS file

const RegistrationForm = () => {
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Register Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="phone">Phone Number</label>
        <input type="text" placeholder="Phone Number" id="phone" />
        <label htmlFor="aadhar">Aadhar Number</label>
        <input type="text" placeholder="Aadhar Number" id="aadhar" />
        <label htmlFor="state">State</label>
        <select id="state">
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
          {/* Add more states as needed */}
        </select>
        <button type="submit">Register</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
