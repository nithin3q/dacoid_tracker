import React from 'react';

const WorkoutSchedule = () => {
  const workouts = [
    {
      day: 'Mon',
      time: '7:30 am',
      workout: 'Ab Workout',
    },
    {
      day: 'Mon',
      time: '9:00 am',
      workout: 'Upperbody Workout',
    },
    {
      day: 'Wed',
      time: '3:00 pm',
      workout: 'Lowerbody Workout',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-8">Workout Schedule</h1>
      <div className="flex w-full max-w-xl bg-white rounded-lg shadow-md">
        <div className="flex flex-col w-full p-4">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-gray-600">Sun</span>
            <div className="w-full border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
            <span className="text-gray-600">Mon</span>
            <div className="w-full border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
            <span className="text-gray-600">Tue</span>
            <div className="w-full border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
            <span className="text-gray-600">Wed</span>
            <div className="w-full border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
            <span className="text-gray-600">Thu</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <div className="flex-grow border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <div className="flex-grow border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <div className="flex-grow border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <div className="flex-grow border border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
          </div>
        </div>
        </div>
        </div>
        )}
    export default WorkoutSchedule;