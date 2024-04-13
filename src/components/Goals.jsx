import React from "react";
import { Link } from "react-router-dom";

const Goals = () => {
  return (
    <div className="flex flex-col">
      <p className="mb-4 text-lg font-medium text-gray-900 text-center">
        What are your goals?
      </p>
      <div className="px-44 mb-6"></div>
      <div className="mb-2 ">
        <label
          htmlFor="weightLoss"
          className="flex items-center mb-2  text-sm font-medium text-gray-900 bg-gray-100 rounded-lg p-2 w-full h-11"
        >
          <span className="mr-2 ">Weight Loss</span>
          <input
            type="checkbox"
            name="weightLoss"
            id="weightLoss"
            className="ml-auto w-4 h-4 border border-blue-300"
          />
        </label>
      </div>
      <div className="mb-2">
        <label
          htmlFor="muscleGain"
          className="flex items-center mb-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg p-2 w-full h-11"
        >
          <span className="mr-2">Muscle Gain</span>
          <input
            type="checkbox"
            name="muscleGain"
            id="muscleGain"
            className="ml-auto w-4 h-4"
          />
        </label>
      </div>
      <div className="mb-2">
        <label
          htmlFor="flexibility"
          className="flex items-center mb-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg p-2 w-full h-11"
        >
          <span className="mr-2">Flexibility and Mobility</span>
          <input
            type="checkbox"
            name="flexibility"
            id="flexibility"
            className="ml-auto w-4 h-4"
          />
        </label>
      </div>
      <div className="mb-2 ">
        <label
          htmlFor="generalfitness"
          className="flex items-center mb-2  text-sm font-medium text-gray-900 bg-gray-100 rounded-lg p-2 w-full h-11"
        >
          <span className="mr-2 ">General Fitness</span>
          <input
            type="checkbox"
            name="generalfitness"
            id="generalfitness"
            className="ml-auto w-4 h-4"
          />
        </label>
      </div>
      <div className="mb-2">
        <label
          htmlFor="training"
          className="flex items-center mb-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg p-2 w-full h-11"
        >
          <span className="mr-2">Event - specific training</span>
          <input
            type="checkbox"
            name="training"
            id="training"
            className="ml-auto w-4 h-4"
          />
        </label>
      </div>
      <div className="mb-2">
        <label
          htmlFor="mental"
          className="flex items-center mb-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg p-2 w-full h-11"
        >
          <span className="mr-2">Mindfulness and Mental Health</span>
          <input
            type="checkbox"
            name="mental"
            id="mental"
            className="ml-auto w-4 h-4"
          />
        </label>
      </div>
      <Link to="/tracker">
        <button className="w-full text-white bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-40 mb-10">
          Confirm
        </button>
      </Link>
    </div>
  );
};

export default Goals;
