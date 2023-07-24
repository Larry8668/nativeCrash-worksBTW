"use client";
import React, { useState, useEffect } from "react";
import Statistics from "./Statistics";
import { MdQueryStats } from "react-icons/md";
import { useGetCrashReport } from "../../../utils/index";
import useSWR from "axios";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Information = () => {
  const [indentifierSearched, setIdentifierSearched] = useState(null);
  const getCrashReport = () => {};
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
          onClick={getCrashReport}
        >
          Enter
        </button>
      </div>
      <div className=" h-[50vh] w-[100%] flex flex-col items-center justify-center">
        <Statistics />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Information;
