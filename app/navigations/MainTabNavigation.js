
import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import Theme from '../../styles/Theme';
import LogoHeader from '../../components/LogoHeader';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Subscriptions from '../screens/Subscriptions';


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

export default function MainTabNavigation() {
  return (
    <Tab.Navigator
        screenOptions={{
          header: ()=><LogoHeader />,
          tabBarActiveTintColor: Theme.primary,
          tabBarInactiveTintColor: Theme.inactive,
          tabBarStyle: styles.tabBarStyle
        }}
      >
        <Tab.Screen name="Home"  component={Home} 
          options={{
            tabBarIcon:({focused, size, color})=>(
              focused
                ? <Ionicons name='home' size={size} color={color} />
                : <Ionicons name='home-outline' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Search" component={Search} 
          options={{
            tabBarLabel:()=>null,
            
            tabBarButton: (props)=>(<SearchTabButton {...props}/>),
            tabBarIcon: ({focused, size, color})=>(
                <Ionicons name='search' size={size} color={Theme.textPrimaryLight}/>
            )
          }}
        />
        <Tab.Screen name="Subcriptions" component={Subscriptions} 
          options={{
            tabBarIcon: ({focused, size, color})=>(
              focused 
                ? <MaterialIcons name='subscriptions' size={size} color={color} />
                : <MaterialIcons name='subscriptions' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
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
