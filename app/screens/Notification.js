// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import NotificationCard from '../../components/NotificationCard';
import Theme from '../../styles/Theme';


export default function Notification() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notification</Text>
      <NotificationCard text='vivek'/>
      <NotificationCard text='vivek'/>
      <NotificationCard text='vivek'/>
      <NotificationCard text='vivek'/>
      <NotificationCard text='vivek'/>
      <NotificationCard text='vivek'/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level1,
    paddingTop: StatusBar.currentHeight+20,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 16  
  }
});
