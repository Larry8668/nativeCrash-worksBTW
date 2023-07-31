"use client";
import React, { useState, useEffect } from "react";
import Statistics from "./Statistics";
import { MdQueryStats } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterBlock from "./FilterBlock";
import axios from "axios";
import Description from "../Dashboard/Description";
import FilterAndShowData from "./FilterAndShowData";

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
  const [isLoading, setIsLoading] = useState(false);
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
        <div className=" flex flex-col items-start justify-between">
          <div className="h-fit w-full md:h-full md:w-full relative">
            <Statistics backendData={backendData} filterSelected={idSelected} />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-32 p-3  items-start justify-center w-screen ">
            <div
              tabIndex={0}
              data-theme="forest"
              className=" z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
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
            <Description idSelected={idSelected} />
          </div>
        </div>
      </div>
      <FilterAndShowData
        isLoading={isLoading}
        backendData={backendData}
        idSelected={idSelected}
      />
      <ToastContainer />
    </div>
  );
};

export default Information;
