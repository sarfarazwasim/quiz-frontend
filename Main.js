
import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './app/screens/Login';
import Splash from './app/screens/Splash';
import StaticQuiz from './app/screens/Staticquiz'
import DynamicQuiz from './app/screens/Dynamicquiz'
import Thankyoupage from './app/screens/Thankyoupage'
import { AuthProvider, useAuth } from './context/authContext';
import Notification from './app/screens/Notification';



const noNav = ()=>({
  headerShown: false
})



const HomeStack = createNativeStackNavigator();

export default function Main() {
  // const [isLoading, setLoading] = useState(true)
  // const [authenticated, setAuthenticated] = useState(false)
  const Auth = useAuth()

  // useEffect(()=>{
  //   const getToken = async()=>{
  //     const token = await AsyncStorage.getItem('emailId');

  //     // setTimeout(1000, ()=>{
  //     //   setLoading(false)
  //     // })
  //     setLoading(false)

  //     if(token!=null)
  //       setAuthenticated(true)
  //   }

  //   getToken()
  // },[])

  return (
      <NavigationContainer>
        <HomeStack.Navigator>
          {
            Auth.isLoading ? 
              <HomeStack.Screen name="Splash" component={Splash} options={noNav}/>
            :
              !Auth.authenticated ?
                <HomeStack.Screen name="Login" component={Login} options={noNav}/>
              :
                <>
                  <HomeStack.Screen name="Main_Home" component={MainTabNavigation} options={noNav}/>
                  <HomeStack.Screen name="Search" component={Search} options={{header:()=><LogoHeader/>}}/>
                  <HomeStack.Screen name="ContestDetails" component={ContestDetails} options={{header:()=><LogoHeader/>}}/>
                  <HomeStack.Screen name="Play" component={Play} options={noNav}/>
                  <HomeStack.Screen name="Staticpage" component={StaticQuiz} options={noNav}/>
                  <HomeStack.Screen name="Dynamicpage" component={DynamicQuiz} options={noNav}/>
                  <HomeStack.Screen name="Thankyoupage" component={Thankyoupage} options={noNav}/>
                  <HomeStack.Screen name="Notification" component={Notification} options={noNav}/>
                </>
          }
          
        
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
