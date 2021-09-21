import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Theme from '../styles/Theme';
import { CONTEST_DEFAULT_IMAGE } from '../constants/Images'

export default function Contest({date, contestName, imageUri}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={imageUri && imageUri.trim()!==''? {uri: imageUri} : CONTEST_DEFAULT_IMAGE} style={styles.image} resizeMode='cover'  />
      </View>
      <View style={styles.contestDetail}>
        <Text style={styles.contestName} numberOfLines={2} >{contestName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width)
const radius = 6

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 200,
    backgroundColor: Theme.bg_level1,
    borderRadius: radius,
    elevation: 5,
    overflow: 'hidden',
    marginHorizontal: 8,
    marginVertical: 4
    
  },
  imageWrapper:{
    width: '100%',
    height: 130,
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
  },
  contestDetail:{
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    justifyContent: 'space-between',
    
  },
  contestName:{
    fontWeight: "bold",
    color: Theme.textPrimary
  },
  date:{
    color: Theme.textSecondary
  }
});
