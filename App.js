/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {QueryClientProvider, QueryClient} from 'react-query';
import Navigation from './src/navigation';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {refetchInterval: false, staleTime: Infinity},
//   },
// });

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <QueryClientProvider client={queryClient}> */}
      <Navigation />
      {/* </QueryClientProvider> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
