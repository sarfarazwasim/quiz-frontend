import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Contest from './Contest';


export default function HorizontalSlider({heading, children}) {
  return (
    <View style={styles.container}>    
      <Text style={styles.category}>{heading}</Text>
      <ScrollView 
        style={styles.scroller}
        horizontal={true}
      >
        {children}
      </ScrollView>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  category:{
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 12,
    marginBottom: 4
  },
  scroller:{
    marginHorizontal: 4
  }
  
});
