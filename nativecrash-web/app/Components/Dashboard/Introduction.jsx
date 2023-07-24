import React from "react";

const Introduction = () => {
  return (
    <div className="w-fit p-3 md:mt-5 flex flex-col space-y-4  ">
      <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-200 w-fit">
          Native Crash
        </span>{" "}
        Dashboard
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-justify md:text-justify">
        Here, You can view all your recent crashes that we recorded in elegant
        approach in a timeseries manner.
      </p>
    </div>
  );
};

export default Introduction;
