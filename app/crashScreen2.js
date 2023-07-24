import React from "react";
import { View, StyleSheet } from "react-native";
import MapScreen from "./MapScreen";
// import MapScreen from "./src/components/map"

const App = () => {
  return (
    <View style={styles.container}>
      <MapScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
