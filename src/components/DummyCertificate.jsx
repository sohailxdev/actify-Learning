import React from "react";
import Certificate from "../assets/Certificate.jpg";

const DummyCertificate = () => {
  return (
    <div className="w-full lg:w-10/12 mx-0 lg:mx-auto mt-10">
      <p className="text-black text-center text-5xl font-bold">Enroll Now</p>
      <p className="text-gray-500 text-center text-2xl font-semibold">
        Earn a Certifcate
      </p>
      <div className="w-10/12 lg:w-6/12 mx-auto">
        <img src={Certificate} alt="" />
      </div>
    </div>
  );
};

export default DummyCertificate;
