import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Contest from '../../components/Contest';
import Theme from '../../styles/Theme';

export default function Subscriptions() {
  const [contests, setContests] = useState([])

  useEffect(()=>{
   

    let contests_data = [
      {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDc5X3OjHsqcXLdXuFHSqj8_ZyeLmAVGBDg&usqp=CAU',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      },
      {
        imageUrl:'',
        contestName: 'Nulla tempor labore veniam dolore ex.',
        startDateTime: '25 sep'
      }
    ]

    setContests(contests_data)
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollerContainer}>
        {contests && contests.map(({imageUrl, contestName, startDateTime}, index)=>
          <Contest key={index} imageUri={imageUrl} contestName={contestName} date={startDateTime} />  
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Theme.bg_level2
  },
  scrollerContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});