import React from 'react'

const Customer = () => {
  return (
    <div className="customer">
      <h1>Customer Registration Form</h1>
      <form action="">
        <div class="row">
          <label for="name">Username</label>
          <input type="text" id="name" name="custname" />
        </div>
        <div class="row">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="row">
          <label for="p-no">Phone-Number</label>
          <input type="text" id="p-no" name="phoneNumber" />
        </div>
        <div class="row">
          <label for="address">Address</label>
          <textarea name="address" id="address"></textarea>
        </div>
        <div class="row">
          <label for="state">State</label>
          <input type="text" id="state" name="state" />
          <label for="city">City</label>
          <input type="text" id="city" name="city" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Customer
