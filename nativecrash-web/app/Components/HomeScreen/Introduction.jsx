import React from "react";

const Introduction = () => {
  return (
    <div className="h-fit m-3 mt-6 flex flex-col md:flex-row items-center justify-center md:space-x-32 md:space-y-0 space-y-6">
      <div className="w-[70%] p-3 md:mt-5 md:relative md:left-16 ">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
          Welcome To{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-200 w-fit">
            Native Crash!
          </span>
        </h1>
      </div>
      <div className="mockup-code md:relative md:right-32">
        <pre data-prefix="$">
          <code>npm i native-crash</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
};

export default Introduction;
