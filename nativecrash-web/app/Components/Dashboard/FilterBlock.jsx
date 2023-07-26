import React from "react";

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
const FilterBlock = ({idSelected}) => {
  return (
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
  );
};

export default FilterBlock;
