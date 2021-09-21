import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from '../../styles/Theme';


export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Search screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
