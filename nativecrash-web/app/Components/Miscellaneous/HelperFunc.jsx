export const filterData = (data, filterSelection) => {
  //0 -> day ; 1 -> week ; 2 -> mth
  let updatedData = [];
  const today = new Date().setHours(0, 0, 0, 0) / 1000;
  switch (filterSelection) {
    case 0: {
      //   console.log("selection is 0");
      updatedData = data.filter((item, index) => {
        if (index !== 0) {
          const itemTime = Number(item.time) / 1000;
          const itemDate =
            new Date(itemTime * 1000).setHours(0, 0, 0, 0) / 1000;
          return itemDate === today;
        }
        return true;
      });
      break;
    }
    case 1: {
      //   console.log("selection is 1");
      const lastWeek = today - 7 * 24 * 60 * 60;
      updatedData = data.filter((item, index) => {
        if (index !== 0) {
          const itemTime = Number(item.time) / 1000;
          return itemTime >= lastWeek && itemTime <= today;
        }
        return true;
      });
      break;
    }
    case 2: {
      //   console.log("selection is 2");
      const lastMonth = today - 30 * 24 * 60 * 60;
      updatedData = data.filter((item, index) => {
        if (index !== 0) {
          const itemTime = Number(item.time) / 1000;
          return itemTime >= lastMonth && itemTime <= today;
        }
        return true;
      });
      break;
    }
    default: {
      //   console.log("default");
      updatedData = data;
      break;
    }
  }
  //   console.log(updatedData);
  return updatedData;
};

const initializeHourlyObject = () => {
  const currentDate = new Date();
  const initialObject = {};

  for (let hour = 0; hour < 24; hour++) {
    const key = `${currentDate.toISOString().substring(0, 10)} ${hour
      .toString()
      .padStart(2, "0")}:00:00`;
    initialObject[key] = 0;
  }

  return initialObject;
};

const initializeWeeklyObject = () => {
  const currentDate = new Date();
  const endOfPrevious8Days = new Date(currentDate);
  const startOfPrevious8Days = new Date(currentDate);
  startOfPrevious8Days.setDate(currentDate.getDate() - 7); // Start of the 8-day period (8 days ago)

  const initialObject = {};

  for (let day = 0; day < 8; day++) {
    const date = new Date(startOfPrevious8Days);
    date.setDate(startOfPrevious8Days.getDate() + day); // Get the date for each day of the previous 8 days

    if (date <= endOfPrevious8Days) {
      const key = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'
      initialObject[key] = 0;
    }
  }

  return initialObject;
};

const initializeMonthlyObject = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the last day of the current month

  const initialObject = {};

  for (let day = 1; day <= lastDayOfMonth; day++) {
    const key = `${currentYear}-${(currentMonth + 1)
      .toString()
      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    initialObject[key] = 0;
  }

  return initialObject;
};

export const getListForGraph = (data, filterSelection) => {
  let returnList = {};
  switch (filterSelection) {
    case 0: {
      returnList = initializeHourlyObject();
      // Iterate through the myList and update the count for each hour
      data.forEach((obj, index) => {
        if (index !== 0) {
          const objTime = Number(obj.time);
          const date = new Date(objTime);
          const hour = date.getUTCHours();

          if (returnList[hour]) {
            returnList[hour]++;
          } else {
            returnList[hour] = 1;
          }
        }
      });

      // Convert the object to an array of key-value pairs and store it in the list
      //   const nameCountList = Object.entries(returnList);
      //   console.log("inside list graph -->", nameCountList);
      break;
    }
    case 1: {
      returnList = initializeWeeklyObject();
      data.forEach((obj, index) => {
        if (index !== 0) {
          const objTime = Number(obj.time);
          const date = new Date(objTime);
          const yearMonthDay = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'

          if (returnList[yearMonthDay]) {
            returnList[yearMonthDay]++;
          } else {
            returnList[yearMonthDay] = 1;
          }
        }
      });

      // Convert the object to an array of key-value pairs and store it in the list
      //   const nameCountList = Object.entries(returnList);
      //   console.log("inside list graph -->", nameCountList);
      break;
    }
    case 2: {
      returnList = initializeMonthlyObject();
      data.forEach((obj, index) => {
        if (index !== 0) {
          const objTime = Number(obj.time);
          const date = new Date(objTime);
          const yearMonthDay = date.toISOString().substring(0, 10); // Get the date in the format 'YYYY-MM-DD'

          if (returnList[yearMonthDay]) {
            returnList[yearMonthDay]++;
          } else {
            returnList[yearMonthDay] = 1;
          }
        }
      });

      // Convert the object to an array of key-value pairs and store it in the list
      //   const nameCountList = Object.entries(returnList);
      //   console.log("inside list graph -->", nameCountList);
    }
  }
  console.log(returnList);
  return returnList;
};

export const dateArrayToEpoch = (data) => {
    let returnList =[]
  data.forEach((item, index) => {
    const epochMilliseconds = Date.parse(item);
    returnList[index] = epochMilliseconds;
    // console.log(epochMilliseconds);
  });
//   console.log(returnList);
return(returnList);
};
