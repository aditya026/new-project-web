import React from "react";
import backgroundImage from '../../assets/bg-1.jpg';
import user from '../../assets/userImage.jpg';
import customer from '../../assets/customerImage.jpg';
import './page01.css'

const Page01 = () => {
  return (
    <div className="main" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card">
        <img src={user} alt="" />
        <div className="card-body">
          <h2>User</h2>
        </div>
      </div>
      <div className="card">
        <img src={customer} alt="" />
        <div className="card-body">
          <h2>Customer</h2>
        </div>
      </div>
    </div>
  );
};

export default Page01;