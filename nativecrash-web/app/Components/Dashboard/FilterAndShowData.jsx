import React, { useState, useEffect } from "react";
import { filterData } from "../Miscellaneous/HelperFunc";

const FilterAndShowData = (props) => {
  const { isLoading, idSelected, backendData } = props;
  let filteredData = backendData;
  if (backendData !== null) filteredData = filterData(backendData, idSelected);

  console.log(isLoading, idSelected, backendData);
  return (
    <div className="w-full h-fit relative flex-col m">
      {!isLoading ? (
        backendData === null ? (
          <h1 className="mb-4 text-4xl my-7 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-secondary text-center ">
            Enter an Unique Identifier to view crashes
          </h1>
        ) : (
          <>
            <div className="my-9">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-secondary text-center">
                Hey Developer, Your crash report is here!
              </h1>
            </div>
            {filteredData
              .sort((a, b) => b.time - a.time) // Sort the array in ascending order based on 'time' field
              .map((errorItem, index) => (
                <ErrorUnit
                  key={index}
                  index={index}
                  errorTitle={errorItem.errortitle}
                  errorInfo={errorItem.errordescription}
                  date={errorItem.time}
                />
              ))}
          </>
        )
      ) : (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-secondary text-center animate-pulse">
          Fetching Your Crash Report....
        </h1>
      )}
    </div>
  );
};

export default FilterAndShowData;

const ErrorUnit = ({ index, errorTitle, errorInfo, date }) => {
  let bgColors = ["bg-accent", "bg-primary", "bg-secondary"];
  return (
    <div
      className={` h-fit p-3 m-3 flex flex-col md:flex-row relative rounded ${
        bgColors[index % 3]
      } text-primary-content self-center items-center justify-between px-4`}
    >
      <p>{index + 1}</p>
      <p>{errorTitle}</p>
      {/* <p>{errorInfo.substring(0, 100)}</p> */}
      <p>
        {new Date(Number(date)).toLocaleDateString()}{" "}
        {new Date(Number(date)).toLocaleTimeString()}
      </p>
    </div>
  );
};
