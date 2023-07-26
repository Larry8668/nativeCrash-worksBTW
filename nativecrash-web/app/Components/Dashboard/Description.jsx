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
const Description = ({ idSelected }) => {
  return (
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
  );
};

export default Description;
