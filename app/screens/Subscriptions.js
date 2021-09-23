import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Contest from '../../components/Contest';
import Theme from '../../styles/Theme';

export default function Subscriptions({navigation}) {
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
      {/* <Text onPress={()=>navigation.navigate('ContestDetails')}>click here</Text> */}
      <ScrollView contentContainerStyle={styles.scrollerContainer}>
        {contests && contests.map(({imageUrl, contestName, startDateTime}, index)=>
        <TouchableOpacity key={index} onPress={()=>navigation.navigate('ContestDetails')} activeOpacity={0.9}>
          <Contest imageUri={imageUrl} contestName={contestName} date={startDateTime} />  
        </TouchableOpacity>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Theme.bg_level2,
    paddingBottom: 60
  },
  scrollerContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});