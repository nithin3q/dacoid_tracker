import React from "react";
import search from "../assets/search.png";
import footer from "../assets/footer.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import plus from "../assets/plus.png";

const Schedule = () => {
  return (
    <div children="">
      <div className="flex flex-col ">
        <Link to="/tracker">
        <div className="absolute top-6 left-4 bg-gray-100 p-1 ">
          <i class="fa-solid fa-chevron-left "></i>
        </div>
        </Link>
        <p className="mb-10 text-lg font-medium text-gray-900 text-center">
          Workout Schedule
        </p>
      </div>
      <div className=" flex fex-row mb-6">
        <div className="mx-auto flex flex-row">
          <i class="fa-solid fa-chevron-left"></i>
          <p className="text-sm -m-0.5 mx-2">Feb 2024</p>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="flex flex-row text-center ml-1 mr-1 mb-6 text-md">
        <div className="px-4 mb-4 mr-2 mb-5">
          <p>Sun</p>
          <p className="text-2xl ">5</p>
        </div>
        <div className="px-4 border rounded-lg bg-primary-300 text-white mr-2">
          <p>Mon</p>
          <p className="text-2xl ">6</p>
        </div>
        <div className="px-4 mr-2">
          <p>Tue</p>
          <p className="text-2xl ">7</p>
        </div>
        <div className="px-4 mr-2">
          <p>Wed</p>
          <p className="text-2xl ">8</p>
        </div>
        <div className="px-4 mr-2">
          <p>Thu</p>
          <p className="text-2xl ">9</p>
        </div>
      </div>
      <div className="mt-10">
        <p classname="">6:10 Am</p>
        <div className="flex-grow border border-gray-300 my-1"></div>
        <div className="absolute border  ml-44 bg-primary-950 text-white rounded-full px-2 mt-4">
          <p classname="">Ab Workout, 7:30am</p>
        </div>
        <p classname="">7:00 Am</p>

        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">8:00 Am</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>
        <div className="absolute border  ml-24 bg-primary-950 text-white rounded-full px-2 mt-1">
          <p classname="">Upperbody Workout, 9am</p>
        </div>
        <div className="absolute  w-72 mt-7">
          <div className="w-2 h-2 bg-primary-400 rounded-full mr-2 absolute -mt-1"></div>
          <div className="flex-grow border border-primary-300 px-1"></div>
        </div>
        <p classname="">9:00 Am</p>

        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">10:00 Am</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">11:00 Am</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">12:00 Pm</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">1:00 Pm</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>
        <div className="absolute border  ml-24 bg-gray-300 rounded-full px-2 mt-0">
          <p classname="">Lowerbody Workout, 3pm</p>
        </div>
        <p classname="">2:00 Pm</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>

        <img src={plus} className="absolute right-4 w-16 mt-" />
        <p classname="">3:00 Pm</p>

        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">4:00 Pm</p>
        <div className="flex-grow border border-gray-300 my-1  "></div>
        <p classname="">5:00 Pm</p>
        <div className="flex-grow border border-gray-300 my-1  mb-12"></div>
        <div className="flex-grow border border-gray-300 my-1  "></div>
      </div>
      <footer className="absolute bottom-0 flex justify-around mr-5 ">
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

export default Schedule;
