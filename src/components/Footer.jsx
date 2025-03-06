import React from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const scrolltoHash = function (element_id) {
    if (location.pathname == "/" || location.pathname == "/learning") {
      const element = document.getElementById(element_id);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { preventScrollReset: false });
    }
  };

  const QuickLinks = () => {
    return (
      <div>
        <p className="font-semibold text-white">Quick Links</p>
        
        <div className="flex flex-col items-start mt-5 space-y-2">
          <Link
            to="/"
            onClick={() => scrolltoHash("home")}
            className="cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/contact"
            // onClick={() => scrolltoHash("")}
            className="cursor-pointer transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
          >
            Contact
          </Link>
          <a
            // href=""
            onClick={() => scrolltoHash("whyChooseUs")}
            className="cursor-pointer transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            Why choose us?
          </a>
          <Link
            to={"/learning"}
            onClick={() => scrolltoHash("learning")}
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            Actify Learning
          </Link>
          <Link
            to={"/business"}
            onClick={() => scrolltoHash("business")}
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            Actify Business
          </Link>
          <Link
            to={"/careers"}
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            Careers
          </Link>
        </div>
      </div>
    );
  };

  const Socials = () => {
    return (
      <div>
        <p className="font-semibold text-gray-800 dark:text-white">Business</p>

        <div className="flex flex-col items-start mt-4 space-y-2">
          <a
            href="https://www.instagram.com/actify.business/"
            target="_blank"
            className="text-gray-600 ml-1 transition-colors duration-300 flex items-center justify-center gap-2 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            <i className="fa-brands fa-instagram"></i> actify.business
          </a>
          <a
            href="https://www.linkedin.com/company/actify-business/"
            className="text-gray-600 ml-1 transition-colors duration-300 flex items-center justify-center gap-2 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            <i className="fa-brands fa-linkedin"></i> Actify Business
          </a>
          <a
            href="https://www.facebook.com/people/Actify-Business/100094744836119/"
            target="_blank"
            className="text-gray-600 ml-1 transition-colors duration-300 flex items-center justify-center gap-2 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            <i className="fa-brands fa-facebook"></i> Actify Business
          </a>
        </div>
        <p className="font-semibold text-gray-800 dark:text-white mt-2">
          Learning
        </p>
        <div className="flex flex-col ml-1 items-start mt-4 space-y-2">
          <a
            target="_blank"
            href="https://www.instagram.com/actify.learning/"
            className="text-gray-600 transition-colors duration-300 flex items-center justify-center gap-2 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            <i className="fa-brands fa-instagram"></i> actify.learning
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/actify-learning/"
            className="text-gray-600 transition-colors duration-300 flex items-center justify-center gap-2 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            <i className="fa-brands fa-linkedin"></i> Actify Learning
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Actify-Learning/100094659700334/"
            className="text-gray-600 transition-colors duration-300 flex items-center justify-center gap-2 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            <i className="fa-brands fa-facebook"></i> actify.learning
          </a>
        </div>
      </div>
    );
  };

  const Contacts = () => {
    return (
      <div>
        <p className="font-semibold text-gray-800 dark:text-white">
          Contact Us
        </p>

        <div className="flex flex-col items-start mt-5 space-y-2">
          <a
            href="tel:+91-9867476400 "
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline font-mono hover:text-blue-500"
          >
            +91-9867476400
          </a>
          <a
            href="mailto:info@actifyzone.com"
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
          >
            info@actifyzone.com
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <footer className=" bg-[#062C5F]">
        <div className="container px-6 py-12 mx-auto">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl text-white">
              Get in touch today to learn more about our courses and software
              products.
            </h1>

            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link
                to={"/contact"}
                className="inline-flex items-center justify-center w-full px-4 py-2 duration-300 bg-white rounded-lg gap-x-3 hover:bg-[#f3ddff] focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span className="text-black">Contact Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <hr className="my-6 md:my-10 border-gray-700" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <QuickLinks />
            <Socials />
            <Contacts />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Address
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="https://maps.app.goo.gl/9yNoumTx9Byfo8YZ8"
                  target="_blank"
                  className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice
                  Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img
                className="w-auto h-14 bg-[#FFFFFF] p-2 rounded-lg "
                src="https://static.wixstatic.com/media/babd9b_ba57d40fd60d4d3bbc5a606f6fea1666~mv2.png/v1/fill/w_209,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac.png"
                alt=""
              />
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
              © Copyright 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
