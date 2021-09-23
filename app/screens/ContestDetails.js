import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { storeStringData } from '../../constants/util';
import Theme from '../../styles/Theme';


export default function ContestDetails({navigation}) {
  useEffect(()=>{
    storeStringData('contestId', 'contest2')
    console.log('setting data')
  },[])

  return (
    <View style={styles.container}>
      <Text>Contest Details!</Text>
      <Text onPress={()=>navigation.navigate('Play')}>Go and play</Text>
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
