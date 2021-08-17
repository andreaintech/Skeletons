import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { RenderedComponent, SkeletonComponent } from './src/components';


const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setIsReady(true), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isReady ? (
        <RenderedComponent />
      ) : (
        <SkeletonComponent />
      )}
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
