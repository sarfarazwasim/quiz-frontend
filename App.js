
import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Subscriptions from './app/screens/Subscriptions';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import Theme from './styles/Theme';
import LogoHeader from './components/LogoHeader';
import Search from './app/screens/Search';
import MainTabNavigation from './app/navigations/MainTabNavigation';
import ContestDetails from './app/screens/ContestDetails';
import Play from './app/screens/Play';



const noNav = ()=>({
  headerShown: false
})



const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        
      >
        <HomeStack.Screen name="Main_Home" component={MainTabNavigation} options={noNav}/>
        <HomeStack.Screen name="Search" component={Search} options={{header:()=><LogoHeader/>}}/>
        <HomeStack.Screen name="ContestDetails" component={ContestDetails} options={{header:()=><LogoHeader/>}}/>
        <HomeStack.Screen name="Play" component={Play} options={noNav}/>
      
      </HomeStack.Navigator>
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
  
});
