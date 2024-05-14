import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="absolute top-0 left-0 min-h-full ob"
          alt=""
        />
        <div className="relative z-10 max-w-screen-lg mx-auto grid grid-cols h-full items-center">
          <div>
            <div className="flex justify-end"></div>
          </div>
          <div className="col-span-6">
            <h1 className="text-red-200 font-extrabold text-7xl mb-8">
              FLUENT FLOW
            </h1>
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Let's learn English with exclusive experiences
            </h1>
            <p className="text-stone-100 text-base">
              Fluent Flow is developed for University undergraduates to enhance
              their own skills in reading, speaking and writing.
            </p>
            <Link to="/sign-up">
              <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
