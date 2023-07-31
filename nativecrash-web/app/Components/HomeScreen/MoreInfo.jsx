import React from "react";
import Image from 'next/image'

const MoreInfo = () => {
  return (
    <div className="flex flex-1 flex-col md:flex-row space-y-6 space-x-4 p-3 my-3 mx-5 md:mx-9 ">
      <div className="md:w-[50%]">
        <Image
          src="/graph.png"
          width={2500}
          height={2500}
          alt="Picture of the author"
        />
      </div>
      <div className="md:w-[50%] flex flex-col items-center justify-center space-y-6">
        <p className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400 text-justify md:text-justify md:w-[600px]">
          Native Crash is an end-to-end and easy to use package for React Native to manage, analyse and debug errors easily. Never again do you have to worry about finding errors in your production code when you have us!
        </p>
        <p className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400 text-justify md:text-justify md:w-[600px]">
          With Our Interactive Web UI and the mail nnotification technology, your users can alert the developers for fast and seemless debugging.
        </p>
      </div>
    </div>
  );
};

export default MoreInfo;
