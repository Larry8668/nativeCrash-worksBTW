import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates"; //this can also b used to roll out updates to app and make it auto update read docs

import axios from "axios";

//to store data, val shd b json => stringify b4 store
export const storeData = (key, val) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, JSON.stringify(val))
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

//to fetch val which has a key; parse the result to get json
export const getData = (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((data) => resolve(JSON.parse(data)))
      .catch((error) => reject(error));
  });
};

//to fetch all values with specified keys (in an array)
export const getMultipleData = (keys) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiGet(keys)
      .then((data) => {
        const jsonData = {};
        data.forEach(([key, value]) => {
          jsonData[key] = JSON.parse(value);
        });
        resolve(jsonData);
      })
      .catch((error) => reject(error));
  });
};

//to get all the key-value from the async store
export const getAllData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const data = await getMultipleData(keys);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//to clear all data that has been sent to asyc store
export const clearAllData = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.clear()
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

/////////////////////////////////////

export const handleErrorLogging = (error, info) => {
  console.log(error.toString(), info);
  const newErrorEntityToDB = {
    time: Date.now(),
    errorTitle: error.toString(),
    errorDescription: JSON.stringify(info),
  };
  axios
    .post("https://yucca-interface.vercel.app/logerror", {
      errorTitle: newErrorEntityToDB.errorTitle,
      errorDescription: newErrorEntityToDB.errorDescription,
      time: newErrorEntityToDB.time,
    })
    .then(() => {
      console.log("Post req complete...");
    })
    .catch((error) => {
      console.error("Error making post req --> ", error);
    });
  storeData(newErrorEntityToDB.time.toString(), newErrorEntityToDB)
    .then(() => console.log("error logged ..."))
    .catch((error) => console.error("Error logging --> ", error));
};

export const handleRestartApp = async () => {
  try {
    await Updates.reloadAsync();
  } catch (error) {
    console.error("Error while restarting the app:", error);
  }
};

export const handleSendCrashMail = async (items) => {
  console.log("inside handleSendMail -->", items);
  axios
    .post("https://yucca-interface.vercel.app/sendcrashreport", {
      arrayOfErrors: items,
    })
    .then(() => {
      console.log("Post req complete (mail)...");
    })
    .catch((error) => {
      console.error("Error making Post req (mail)--> ", error);
    });
};
