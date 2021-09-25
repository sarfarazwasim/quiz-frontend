import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import Theme from '../styles/Theme';


export default function LogoHeader() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/quizlogo.png')}
                style={styles.back_image} />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: StatusBar.currentHeight+10,
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: Theme.bg_level1,
    elevation: 2
  },
  headerText:{
    color: Theme.primary,
    fontWeight: 'bold',
    fontSize: 22
  },
  back_image: {
    width: 100,
    height: 35,
    resizeMode: 'cover',
    marginLeft: -10,
    // position: 'absolute',
    opacity:1,
  }
});
