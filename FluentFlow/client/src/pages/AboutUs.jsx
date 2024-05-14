import React from "react";
import logo from "../assets/FluentFlow-removebg-preview.png";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-lg mx-auto grid grid-cols-1 gap-6 items-center text-center">
          <div>
            <h1 className="text-red-300 font-extrabold text-6xl mb-8">
              About Us
            </h1>
            <h3 className="text-white font-extrabold text-2xl mb-8">
              Discover how Fluent Flow is revolutionizing English learning,
              empowering university students to enhance their reading, speaking,
              and writing skills
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-[#f7d0b6] py-20" id="progress-section">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
            <div className="max-w-xl">
              <h2 className="font-extrabold text-sky-950 text-4xl mb-4">
                About Us
              </h2>
              <p className="text-base text-sky-950 leading-relaxed">
                At Fluent Flow, we're passionate about revolutionizing the way
                English is learned. Our platform is designed to empower
                university undergraduates to enhance their skills in reading,
                speaking, and writing.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Replace the src attribute with the logo image */}
              <img src={logo} alt="About Us" className="w-32 md:w-48 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
