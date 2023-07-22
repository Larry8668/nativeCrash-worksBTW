import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'
import ErrorBoundary from './ErrorBoundary';

const CrashScreen2Content = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const CrashScreen2 = () =>{
  <ErrorBoundary>
    <CrashScreen2Content />
  </ErrorBoundary>
}

export default CrashScreen2


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});