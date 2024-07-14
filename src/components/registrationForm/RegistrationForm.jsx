import React from "react";
import "./registrationForm.css"; // Import the CSS file

const RegistrationForm = () => {
  return (
    <div className="register">
      <h3>Register Here</h3>
      <form>
        <div className="row">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter your name" id="username" />
        </div>
        <div className="row">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" placeholder="Enter your Phone Number" id="phone" />
        </div>
        <div className="row">
          <label htmlFor="aadhar">Aadhar Number</label>
          <input type="text" placeholder="Enter your Aadhar Number" id="aadhar" />
        </div>
        <div className="row last-row">
          <div className="col">
            <label htmlFor="state">State</label>
            <select id="state">
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" placeholder="Enter your City name"/>
          </div>
        </div>
        <div className="row"></div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;