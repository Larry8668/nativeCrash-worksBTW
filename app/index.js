import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ErrorBoundary from "./ErrorBoundary";
import {
  buttonStyles,
  headingStyles,
  contactDevButtonStyle,
} from "./styles/inedx";
import { useColorScheme } from "nativewind";
import { useRouter } from "expo-router";

import { getAllData, clearAllData } from "./dataService";

function PageContent() {
  const theme = useColorScheme();
  const router = useRouter();
  // console.log(theme);
  const [state, setState] = useState(0);
  const [asyncStoreData, setAsyncStoreData] = useState(null);

  const handleGetAllData = () => {
    // console.log("Entered handleGetAllData");
    getAllData()
      .then((data) => {
        // console.log("returned...");
        setAsyncStoreData(data);
      })
      .catch((error) => {
        console.error("Error fetching all data --> ", error);
      });
  };
  const handleClearAsyncStorage = () => {
    clearAllData()
      .then(() => console.log("Async Storage emptied ..."))
      .catch((error) => console.error("Error clearing storage --> ", error));
  };

  const counterAdd = () => {
    setState((prevState) => prevState + 1);
  };

  const counterRemove = () => {
    setState((prevState) => prevState - 1);
  };
  if (state < 0) {
    // throw new Error("Value should be Postitive");
    // console.log(var)
    // const obj = null;
    // const value = obj.someProperty;
    function recursiveFunction() {
      recursiveFunction(); // RangeError: Maximum call stack size exceeded
    }
    recursiveFunction();
  }
  useEffect(() => {
    handleGetAllData();
    // console.log("here -->",asyncStoreData);
    // handleClearAsyncStorage();
  }, []);
  return (
    <>
      <View className="flex flex-col items-center justify-around bg-black h-[100%]">
        <View className="flex flex-col items-center justify-center h-auto">
          <View className="flex flex-col items-center justify-center space-y-4">
            <Text className={`${headingStyles}`}>R_crashlytics</Text>
            <Text className={`${headingStyles}`}>This one Works</Text>
          </View>
          <View className="flex flex-row m-3 space-x-4 ">
            <TouchableOpacity
              className={`${buttonStyles}`}
              onPress={() => {
                router.push("/crashScreen1");
              }}
            >
              <Text>Crash 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`${buttonStyles}`}
              onPress={() => {
                router.push("/crashScreen2");
              }}
            >
              <Text>Crash 2</Text>
            </TouchableOpacity>
          </View>
          <Pressable
            onPress={() => {
              counterAdd();
            }}
            android_ripple={{ color: "silver" }}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 6,
              backgroundColor: "silver",
            }}
          >
            <Text> + </Text>
          </Pressable>
          <Text style={{ paddingHorizontal: 6 }}> {state} </Text>
          <Pressable
            onPress={() => {
              counterRemove();
            }}
            android_ripple={{ color: "silver" }}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 6,
              backgroundColor: "silver",
            }}
          >
            <Text> - </Text>
          </Pressable>
        </View>
        <TouchableOpacity
          className={`${contactDevButtonStyle}`}
          onPress={() => console.log(asyncStoreData)}
          // disabled={!(asyncStoreData === null)} //NOT WORKING IDK
        >
          <Text>Send Crash Report</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default function Page() {
  return (
    <ErrorBoundary theme="DARK_MODE">
      <PageContent />
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
