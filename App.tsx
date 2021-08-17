import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { SkeletonComponent } from './src/components';

const App = () => {

  return (
    <View style={styles.container}>
      <SkeletonComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export default App;
