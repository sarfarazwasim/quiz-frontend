import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';

import Theme from '../styles/Theme';


export default function LogoHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>

      <Text style={styles.headerText}>Quizzz</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
        <View style={styles.notificationWrapper} >
          <Ionicons name="notifications" size={24} color={Theme.textSecondary} />
        </View>
      </TouchableOpacity>

      {/*  <Image source={require('../assets/quizlogo.png')}
                style={styles.back_image} /> */}

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
    paddingRight: 28,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.bg_level1,
    elevation: 2
  },
  headerText:{
    color: Theme.primary,
    fontWeight: 'bold',
    fontSize: 22
  },

  notificationWrapper:{
    // backgroundColor: 'black'
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
