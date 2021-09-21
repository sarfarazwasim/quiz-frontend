
import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/screens/Home';
import Subscriptions from './app/screens/Subscriptions';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import Theme from './styles/Theme';
import LogoHeader from './components/LogoHeader';
import Search from './app/screens/Search';
import MainTabNavigation from './app/navigations/MainTabNavigation';


const Tab = createBottomTabNavigator();

const SearchTabButton = ({children, onPress})=>(
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.searchBtnWrapper}
    onPress={onPress}
  >
    <View
      style={styles.searchBtn}
    >
      {children}
    </View>
  </TouchableOpacity>
)

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtnWrapper:{
    top:-30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 50,
    overflow: 'hidden'
  },
  searchBtn: {
    width: 50,
    height: 50,
    backgroundColor: Theme.primary
  },
  tabBarStyle: {
    borderRadius: 50,
    elevation: 5,
    position: 'absolute',
    height: 60,
    paddingBottom: 8,
    paddingTop: 4

  }
});
