import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ErrorBoundary from "./ErrorBoundary";

function PageContent() {
  const [state, setState] = useState(0);

  const counterAdd = () => {
    setState((prevState) => prevState + 1);
  };

  const counterRemove = () => {
    setState((prevState) => prevState - 1);
  };
  if (state < 0) {
    throw new Error("Value should be Postitive");
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
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
    </>
  );
}

export default function Page() {
  return (
    <ErrorBoundary theme = 'DARK_MODE'>
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
