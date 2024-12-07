// components/ReachAudiences.js
import React from 'react';

export const ReachAudiences = () => {
  const data = [
    { number: "20M", text: "Unique users daily" },
    { number: "195", text: "Countries served" },
    { number: "17", text: "Years of Industry Presence" },
  ];

  return (
    <div className="bg-black py-4 px-20 lg:px-20 xl:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10">
        <div className="flex-1 lg:w-2/3 xl:w-1/2">
          <h2 className="text-[#7FFFD4] font-bold text-6xl lg:text-7xl xl:text-8xl leading-tight">
            REACH <br />
            AUDIENCES <br />
            WORLDWIDE
          </h2>
          <div className="bg-yellow-500 h-1 w-44 mt-4"></div>
        </div>

        <div className="lg:w-1/3 xl:w-1/4 mt-10 lg:mt-0">
          {data.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="bg-black border border-yellow-500 p-4 rounded-lg text-center">
                <p className="text-white text-5xl lg:text-6xl xl:text-7xl font-bold">
                  {item.number}
                </p>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};