"use client";
import React, { useState, useEffect } from "react";
import Statistics from "./Statistics";
import { MdQueryStats } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Errors from "./Errors";
const timeFilters = ["hour", "day", "week"];
const filterItems = [
  {
    title: "Past 1 Day",
    text: "You Are viewing the errors and crashes caused in the past day.",
  },
  {
    title: "Previous Week",
    text: "You Are viewing the errors and crashes caused in the past Week.",
  },
  {
    title: "Through a Month",
    text: "You Are viewing the errors and crashes caused in the past Month.",
  },
];
const Information = () => {
  const [indentifierSearched, setIdentifierSearched] = useState(null);
  const [idSelected, setIdSelected] = useState(0);

  const [backendData, setBackendData] = useState(null);
  const [allErrors, setAllErrors] = useState({});
  const getCrashReport = (e, uniqueIdentifier) => {
    console.log(uniqueIdentifier);

    if (uniqueIdentifier === null || uniqueIdentifier === undefined) {
      toast.error("Oops, Enter An Identifier", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      axios
        .get(
          `https://yucca-interface.vercel.app/crashreport?uid=${uniqueIdentifier}`
        )
        .then((res) => {
          if (res.data.rows) {
            setBackendData(res.data.rows);
          }
          console.log(res.data);
          toast.success("Success!, Data Got!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  return (
    <div>
      <div className="my-7 w-screen flex items-center justify-center flex-row md:space-x-6 space-x-4 px-3">
        <MdQueryStats size={30} className="text-emerald-300" />
        <input
          type="text"
          placeholder="Enter Your Identifier Here."
          className="input input-bordered input-success w-full md:max-w-lg  text-center"
          onChange={(e) => {
            setIdentifierSearched(e.target.value);
          }}
        />
        <button
          className="btn btn-outline btn-primary"
          onClick={(e) => {
            getCrashReport(e, indentifierSearched);
          }}
        >
          Enter
        </button>
      </div>
      <div>
        <div className=" md:h-[50vh] md:w-[100vh] flex flex-col md:flex-row items-start justify-between">
          <Statistics timeFilter={timeFilters[idSelected]} />
          <div className="flex flex-col p-3 space-y-32 items-start justify-center">
            <div className="dropdown flex">
              <label tabIndex={0} className="btn m-1">
                Select Timeframe
              </label>
              <div
                tabIndex={0}
                data-theme="forest"
                className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
              >
                <div className="card-body">
                  <h3 className="card-title">Select a timeframe!</h3>
                  {filterItems?.map((filterItem, index) => (
                    <p
                      key={index}
                      className={`text-md font-bold cursor-pointer w-fit  ${
                        idSelected === index
                          ? "bg-black w-fit text-white rounded-lg md:p-2"
                          : "text-gray-200"
                      }  transition ease-in-out duration-500`}
                      onClick={() => {
                        setIdSelected(index);
                      }}
                    >
                      {filterItem.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="mockup-code  w-[50vh] my-4 relative mt-9"
              data-theme="forest"
            >
              <p className="pl-4">
                {idSelected !== null
                  ? filterItems[idSelected].text
                  : "Select A timeframe to view all the errors your application has faced!"}
              </p>
            </div>
          </div>
        </div>
        {backendData && (
          <div
            data-theme="forest"
            className="space-y-6 mx-5 relative w-[90%] items-center justify-center"
          >
            {backendData?.map((backendDataItem, index) => (
              <ErrorComponent
                key={index}
                inedx={index}
                errorTitle={backendDataItem.errortitle}
                errorInfo={backendDataItem.errordescription}
                date={backendDataItem.time}
              />
            ))}


          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Information;

const ErrorComponent = ({ index, errorTitle, errorInfo, date }) => {
  useEffect(()=> {
    console.log(errorInfo)
  })
  return (
    <div className=" h-fit p-3 flex flex-row space-x-5 rounded bg-primary text-primary-content self-center">
      <p>{index}</p>
      {/* <p>{errorTitle}</p> */}
      <p>{errorInfo.substring(0, 100)}</p>
      {/* <p>{date}</p> */}

    </div>
  );
};
