import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,FadeInView } from 'react-native';
import Theme from '../../styles/Theme';


export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/quizlogo3.png')}
                style={styles.back_image} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth:'100%',
  },
  back_image: {
    width: 250,
    height: 80,
    // resizeMode: 'cover',
    // position: 'absolute',
    opacity:1,
  }
});
