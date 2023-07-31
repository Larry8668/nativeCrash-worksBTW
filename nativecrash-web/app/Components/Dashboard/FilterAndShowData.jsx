import React, { useState, useEffect } from "react";
import { filterData } from "../Miscellaneous/HelperFunc";

const FilterAndShowData = (props) => {
  const { isLoading, idSelected, backendData } = props;
  let filteredData = backendData;
  if (backendData !== null) filteredData = filterData(backendData, idSelected);

  console.log(isLoading, idSelected, backendData);
  return (
    
          <>
            
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
