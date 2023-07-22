import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import MapView from "react-native-maps";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const CrashScreen2Content = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 46.46753,
    longitude: 6.835,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        className="flex-1 rounded-lg"
        zoomEnabled={true}
        zoomTapEnabled={true}
        initialRegion={currentLocation}
        showsCompass={true}
        showsUserLocation={true}
        showsBuildings={true}
        zoomControlEnabled={true}
        loadingEnabled={true}
        style={styles.map}
      />
    </View>
  );
};

const CrashScreen2 = () => {
  <ErrorBoundary>
    <CrashScreen2Content />
  </ErrorBoundary>;
};

export default CrashScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
