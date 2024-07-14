import React from 'react'
import googleIcon from "../../assets/google.png"
import facebookIcon from "../../assets/fb.png"
import "./customer.css"

const Customer = () => {
  return (
    <div className="customer">
      <h1>Customer Registration Form</h1>
      <form action="">
        <div class="row">
          <label for="name">Username</label>
          <input type="text" id="name" name="custname" placeholder='Enter your name' />
        </div>
        <div class="row">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder='Enter your Email' />
        </div>
        <div class="row">
          <label for="p-no">Phone-Number</label>
          <input type="text" id="p-no" name="phoneNumber" placeholder='Enter your Phone Number' />
        </div>
        <div class="row">
          <label for="address">Address</label>
          <textarea name="address" id="address" placeholder='Enter your Address'></textarea>
        </div>
        <div class="row last-row">
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
            <label for="city">City</label>
            <input type="text" id="city" name="city" placeholder='Enter your City Name ' />
          </div>
        </div>
        <button>Submit</button>
      </form>
      <div className="social">
        <a href="#"><img src={googleIcon} /></a>
        <a href="#"><img src={facebookIcon} /></a>
      </div>
    </div>
  )
};

export default Customer
