import React from "react";
import tracker from "../assets/tracker.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import Footer from "./Footer";
import footer from "../assets/footer.png";
import danger from "../assets/danger1.png";
import search from "../assets/search.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tracker = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <Link to='/goals'>
        <div className="absolute top-6 left-4 bg-gray-100 p-1 ">
          <i class="fa-solid fa-chevron-left "></i>
        </div>
        </Link>
        <p className="mb-10 text-lg font-medium text-gray-900 text-center">
          Workout Tracker
        </p>
      </div>
      <div className="flex flex-row mb-1">
        <p className="text-xs ml-36">Good job</p>
        <p className="text-xs ml-10">less than 320cal</p>
      </div>
      <img src={tracker} alt="tracker" className="mb-4" />
      <div className="border border-gray-100 rounded-lg  flex fex-row my-4 p-2 bg-gradient-to-r from-primary-210 to-white">
        <img src={danger} alt="card1" className="w-5 h-5 my-auto" />
        <div className="flex flex-col ml-2">
          <p className="card-title text-sm/[18px] font-medium text-gray-700 mb-1 mr-10">
            You've burned fewer calories than yesterday. Time to get moving!
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-10">
        <p className="text-md mr-3 font-semibold">Upcoming Workout</p>
        <p className="text-sm ml-36 text-gray-400">see more</p>
      </div>
      <div className="border border-gray-200 rounded-lg shadow-lg  flex fex-row my-4 p-2">
        <img src={card1} alt="card1" className="w-14" />
        <div className="flex flex-col ml-2">
          <p className="card-title text-sm font-medium text-gray-700 mb-1">
            Full Body Workout
          </p>
          <p className="text-xs text-gray-400">Today 3pm</p>
        </div>
        <label className="inline-flex items-center cursor-pointer ml-auto">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="border border-gray-200 rounded-lg shadow-lg  flex fex-row my-4 p-2">
        <img src={card2} alt="card1" className="w-14" />
        <div className="flex flex-col ml-2">
          <p className="card-title text-sm font-medium text-gray-700 mb-1">
            Upper Body Workout
          </p>
          <p className="text-xs text-gray-400">4 Feb, 3:30 pm</p>
        </div>
        <label className="inline-flex items-center cursor-pointer ml-auto">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="text-md font-semibold ">What Do You Want to Train</div>
      <div className="border border-gray-200 rounded-lg flex fex-row mt-2 mb-4 p-2 bg-primary-250">
        <div className="flex flex-col ml-2 mr-8 ">
          <p className="card-title text-xs font-medium mb-2">
            Full Body Workout
          </p>
          <p className="text-xs mb-2 font-medium text-gray-600">Arms</p>
          <p className="text-xs mb-2 font-medium text-gray-600">Chest</p>
          <p className="text-xs mb-2 font-medium text-gray-600">Legs</p>
        </div>
        <img src={card3} alt="card1" className="w-24 ml-24" />
        <label className="inline-flex items-center cursor-pointer ml-auto"></label>
      </div>

      <footer className="absolute bottom-0 flex justify-around mr-5 mb-4">
        <div
          className="cursor-pointer hover:text-blue-500"
          onClick={() => handleHomeClick()}
        >
          <Link to="/schedule">
            <img src={search} className="relative mx-auto  -mb-10 w-16" />
            <Link to="/signup">
              <div className="absolute  p-6 rounded-full  text-white right-0 active:bg-gray-100 mt-2 "></div>
            </Link>
            <Link to="/goals">
              <div className="absolute  p-6 rounded-full  text-white left-0 active:bg-gray-100 mt-2 "></div>
            </Link>
            <img src={footer} className="" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Tracker;
