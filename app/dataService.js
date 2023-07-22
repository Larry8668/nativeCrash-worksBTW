import AsyncStorage from "@react-native-async-storage/async-storage";
import { resolve } from "expo-router/src/link/path";

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
