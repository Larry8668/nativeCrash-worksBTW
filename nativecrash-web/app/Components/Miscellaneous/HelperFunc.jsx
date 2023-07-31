// export const filterData = (data, filterSelection) => {
//   //0 -> day ; 1 -> week ; 2 -> mth
//   let updatedData = [];
//   const today = new Date().setHours(0, 0, 0, 0) / 1000;
//   switch (filterSelection) {
//     case 0: {
//       //   console.log("selection is 0");
//       updatedData = data.filter((item, index) => {
//         if (index !== 0) {
//           const itemTime = Number(item.time) / 1000;
//           const itemDate =
//             new Date(itemTime * 1000).setHours(0, 0, 0, 0) / 1000;
//           return itemDate === today;
//         }
//         return true;
//       });
//       break;
//     }
//     case 1: {
//       //   console.log("selection is 1");
//       const lastWeek = today - 7 * 24 * 60 * 60;
//       updatedData = data.filter((item, index) => {
//         if (index !== 0) {
//           const itemTime = Number(item.time) / 1000;
//           return itemTime >= lastWeek && itemTime <= today;
//         }
//         return true;
//       });
//       break;
//     }
//     case 2: {
//       //   console.log("selection is 2");
//       const lastMonth = today - 30 * 24 * 60 * 60;
//       updatedData = data.filter((item, index) => {
//         if (index !== 0) {
//           const itemTime = Number(item.time) / 1000;
//           return itemTime >= lastMonth && itemTime <= today;
//         }
//         return true;
//       });
//       break;
//     }
//     default: {
//       //   console.log("default");
//       updatedData = data;
//       break;
//     }
//   }
//   //   console.log(updatedData);
//   return updatedData;
// };

// const initializeHourlyObject = () => {
//   const currentDate = new Date();
//   const initialObject = {};

//   for (let hour = 0; hour < 24; hour++) {
//     const key = hour.toString().padStart(2, "0"); // Use only the hour as the key ('00', '01', ..., '23')
//     initialObject[key] = 0;
//   }

//   return initialObject;
// };

// // const initializeWeeklyObject = () => {
// //   const currentDate = new Date();
// //   const endOfPrevious8Days = new Date(currentDate);
// //   const startOfPrevious8Days = new Date(currentDate);
// //   startOfPrevious8Days.setDate(currentDate.getDate() - 7); // Start of the 8-day period (8 days ago)

// //   const initialObject = {};

// //   for (let day = 0; day < 8; day++) {
// //     const date = new Date(startOfPrevious8Days);
// //     date.setDate(startOfPrevious8Days.getDate() + day); // Get the date for each day of the previous 8 days

// //     if (date <= endOfPrevious8Days) {
// //       const key = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'
// //       initialObject[key] = 0;
// //     }
// //   }

// //   return initialObject;
// // };
// const initializePreviousWeeklyObject = () => {
//     const currentDate = new Date();
//     const startOfWeek = new Date(currentDate);
//     startOfWeek.setUTCDate(currentDate.getUTCDate() - 7); // Start of the week (8 days ago)

//     const initialObject = {};

//     for (let day = 0; day < 8; day++) {
//       const date = new Date(startOfWeek);
//       date.setUTCDate(startOfWeek.getUTCDate() + day); // Get the date for each day of the previous week

//       const key = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'
//       initialObject[key] = 0;
//     }

//     return initialObject;
//   };

// const initializeMonthlyObject = () => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = currentDate.getMonth();
//   const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the last day of the current month

//   const initialObject = {};

//   for (let day = 1; day <= lastDayOfMonth; day++) {
//     const key = `${currentYear}-${(currentMonth + 1)
//       .toString()
//       .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
//     initialObject[key] = 0;
//   }

//   return initialObject;
// };

// export const getListForGraph = (data, filterSelection) => {
//   let returnList = {};
//   switch (filterSelection) {
//     case 0: {
//       returnList = initializeHourlyObject();
//       // Iterate through the myList and update the count for each hour
//       data.forEach((obj, index) => {
//         if (index !== 0) {
//           const objTime = Number(obj.time);
//           const date = new Date(objTime);
//           const hour = date.getUTCHours();

//           if (returnList[hour.toString().padStart(2, "0")]) {
//             // Use the hour as the key ('00', '01', ..., '23')
//             returnList[hour.toString().padStart(2, "0")]++;
//           } else {
//             returnList[hour.toString().padStart(2, "0")] = 1;
//           }
//         }
//       });

//       // Convert the object to an array of key-value pairs and store it in the list
//       //   const nameCountList = Object.entries(returnList);
//       //   console.log("inside list graph -->", nameCountList);
//       break;
//     }
//     case 1: {
//       returnList = initializePreviousWeeklyObject();
//       data.forEach((obj, index) => {
//         if (index !== 0) {
//           const objTime = Number(obj.time);
//           const date = new Date(objTime);
//           const yearMonthDay = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'

//           if (returnList[yearMonthDay]) {
//             returnList[yearMonthDay]++;
//           } else {
//             returnList[yearMonthDay] = 1;
//           }
//         }
//       });

//       // Convert the object to an array of key-value pairs and store it in the list
//       //   const nameCountList = Object.entries(returnList);
//       //   console.log("inside list graph -->", nameCountList);
//       break;
//     }
//     case 2: {
//       returnList = initializeMonthlyObject();
//       data.forEach((obj, index) => {
//         if (index !== 0) {
//           const objTime = Number(obj.time);
//           const date = new Date(objTime);
//           const yearMonthDay = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'

//           if (returnList[yearMonthDay]) {
//             returnList[yearMonthDay]++;
//           } else {
//             returnList[yearMonthDay] = 1;
//           }
//         }
//       });

//       // Convert the object to an array of key-value pairs and store it in the list
//       //   const nameCountList = Object.entries(returnList);
//       //   console.log("inside list graph -->", nameCountList);
//     }
//   }
//   console.log(returnList);
//   return returnList;
// };

// export const dateArrayToEpoch = (data) => {
//   let returnList = [];
//   data.forEach((item, index) => {
//     const epochMilliseconds = Date.parse(item);
//     returnList[index] = epochMilliseconds;
//     // console.log(epochMilliseconds);
//   });
//   //   console.log(returnList);
//   return returnList;
// };

export const filterData = (data, filterSelection) => {
  let updatedData = [];
  const currentTime = Date.now(); // Get the current time in milliseconds

  switch (filterSelection) {
    case 0: {
      updatedData = data.filter((obj, index) => {
        if (index !== 0) {
          return currentTime - obj.time <= 24 * 60 * 60 * 1000;
        }
        return true;
      });
      break;
    }
    case 1: {
      updatedData = data.filter((obj, index) => {
        if (index !== 0) {
          return currentTime - obj.time <= 7 * 24 * 60 * 60 * 1000;
        }
        return true;
      });
      break;
    }
    case 2: {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const daysInCurrentMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
      ).getDate(); // Get the number of days in the current month
      const monthStartTime = new Date(currentYear, currentMonth, 1).getTime(); // Get the epoch time of the first day of the current month
      const monthEndTime = new Date(
        currentYear,
        currentMonth,
        daysInCurrentMonth,
        23,
        59,
        59
      ).getTime(); // Get the epoch time of the last day of the current month
      updatedData = data.filter((obj, index) => {
        if (index !== 0) {
          return obj.time >= monthStartTime && obj.time <= monthEndTime;
        }
        return true;
      });
      break;
    }
    default: {
      updatedData = data;
      break;
    }
  }
  console.log("updated data --> ", updatedData);
  return updatedData;
};

export const getHourlyCount = (data) => {
  const hourCountMap = {};

  // Initialize the count map with 0 for all hours from 1:00am to 12:00pm
  for (let hour = 1; hour <= 12; hour++) {
    const amKey = `${hour}:00am`;
    const pmKey = `${hour}:00pm`;
    hourCountMap[amKey] = 0;
    hourCountMap[pmKey] = 0;
  }
  // Populate the count map based on the filtered objects for the day
  data.forEach((obj, index) => {
    if (index !== 0) {
      const date = new Date(Number(obj.time));
      const hour = date.getHours();
      const minute = "00";
      const ampm = hour < 12 ? "am" : "pm";
      const hour12Format = (hour % 12 === 0 ? 12 : hour % 12).toString();
      const timeKey = `${hour12Format}:${minute}${ampm}`;
      hourCountMap[timeKey]++;
    }
  });

  const sortedHourCountMap = {};
  // Sort the keys in the desired order
  Object.keys(hourCountMap)
    .sort((a, b) => {
      const hoursA = parseInt(a.split(":")[0]);
      const hoursB = parseInt(b.split(":")[0]);
      if (a.includes("pm") && b.includes("am")) return 1;
      if (a.includes("am") && b.includes("pm")) return -1;
      return hoursA - hoursB;
    })
    .forEach((key) => {
      sortedHourCountMap[key] = hourCountMap[key];
    });
  //   console.log(sortedHourCountMap);
  return sortedHourCountMap;
};

export const getWeeklyCount = (data) => {
    const today = new Date(); // Get the current date
    console.log(today);
    // Calculate the start and end dates for the previous week (including today)
    const weekEnd = new Date(today);
    console.log(weekEnd);
      
    const weekStart = new Date(weekEnd);
    weekStart.setDate(weekEnd.getDate() - 6); // Start of the week (Sunday)
    weekStart.setHours(0, 0, 0, 0); // Set the time to midnight
  
    const dailyCountMap = {}; // Map to store daily counts
  
    // Initialize the daily count map for each day of the week
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(weekStart);
      currentDate.setDate(weekStart.getDate() + i);
      dailyCountMap[currentDate.toDateString()] = 0;
    }
  
    console.log(weekStart, weekEnd);
    // Populate the daily count map based on the filtered objects for the week
    data.forEach((obj, index) => {
      if (index !== 0) {
        const objDate = new Date(Number(obj.time));
        // Check if the object date is within the previous week (including today)
        if (objDate >= weekStart && objDate <= weekEnd) {
          const objDateString = objDate.toDateString();
          dailyCountMap[objDateString]++;
        }
      }
    });
  

  //   console.log(dailyCountMap);
  return dailyCountMap;
};

export const getMonthlyCount = (data) => {
  const today = new Date(); // Get the current date

  // Calculate the start and end dates for the previous 30 days
  const daysAgo30 = new Date(today);
  daysAgo30.setDate(today.getDate() - 29); // Go back 30 days (inclusive of today)
  daysAgo30.setHours(0, 0, 0, 0); // Set the time to midnight
  const todayEnd = new Date(today); // End of today
  todayEnd.setHours(23, 59, 59, 999); // Set the time to just before midnight

  const dailyCountMap = {}; // Map to store daily counts
  // Initialize the daily count map for each day of the previous 30 days (including today)
  for (let i = 0; i < 30; i++) {
    const currentDate = new Date(daysAgo30);
    currentDate.setDate(daysAgo30.getDate() + i);
    dailyCountMap[currentDate.toDateString()] = 0;
  }
  // Populate the daily count map based on the filtered objects for the previous 30 days (including today)
  data.forEach((obj, index) => {
    if (index !== 0) {
      const objDate = new Date(Number(obj.time));
      if (objDate >= daysAgo30 && objDate <= todayEnd) {
        const objDateString = objDate.toDateString();
        dailyCountMap[objDateString]++;
      }
    }
  });

  //   console.log(dailyCountMap);
  return dailyCountMap;
};

export const getListForGraph = (data, filterSelection) => {
  let returnObj = {};
  switch (filterSelection) {
    case 0: {
      returnObj = getHourlyCount(data);
      break;
    }
    case 1: {
      returnObj = getWeeklyCount(data);
      break;
    }
    case 2: {
      returnObj = getMonthlyCount(data);
      break;
    }
  }
  console.log(returnObj);
  return returnObj;
};
