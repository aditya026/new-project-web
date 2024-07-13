import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import moduleName from '../customer/Customer'

const Page01 = () => {

  return (
    <div className="bg-[#FE5045] h-screen w-screen font-roboto">
      <div className="h-1/2 flex items-center justify-center">
        <h1 className="text-4xl uppercase font-medium">welcome</h1>
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center gap-28">
        <button className="px-4 py-3 bg-white rounded text-2xl font-normal hover:bg-[#FE5045] hover:text-white transition duration-300 capitalize">
          customer
        </button>
        <button className="px-4 py-3 bg-white rounded text-2xl font-normal hover:text-white hover:bg-[#FE5045] capitalize">
          ragpicker
        </button>
      </div>
    </div>
  );
};

export default Page01;
