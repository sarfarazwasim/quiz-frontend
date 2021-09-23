import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from '../../styles/Theme';
import firebase from '../../firebase/Firebase';
import 'firebase/firestore'


export default function Play({navigation}) {
  const [ended, setEnded] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [question, setQuestion] = useState(null)
  const [scoreBoard, setScoreBoard] = useState(null)

  useEffect(()=>{
    let questionSubscriber=()=>{}
    let contestStatusSubscriber=()=>{}
    let scoreBoardSubscriber=()=>{}
    
    const getData = async ()=>{
      let contestId = await AsyncStorage.getItem('contestId')
      if(contestId==null)
        navigation.navigate('Home')
        
      console.log(contestId)


      //TODO subscription code for firestore

      questionSubscriber = firebase.firestore()
      .collection('question')
      .doc(contestId)
      .onSnapshot(snapshot=>{
        
        console.log('question --->', snapshot.data())
        if(snapshot.data()){
          setQuestion(snapshot.data())
          setScoreBoard(null)
          setWaiting(false)
        }
      })

    
      contestStatusSubscriber = firebase.firestore()
      .collection('contest_status')
      .doc(contestId)
      .onSnapshot(snapshot=>{
        console.log('contest status --->' , snapshot.data())
        if(snapshot.data()){
          setWaiting(snapshot.data().waiting)

          if(snapshot.data().ended)
            setEnded(snapshot.data().ended)
        }
          
      })


      scoreBoardSubscriber = firebase.firestore()
      .collection('score_board')
      .doc(contestId)
      .onSnapshot(snapshot=>{
        
        console.log('score board --->', snapshot.data())
        if(snapshot.data()){
          setScoreBoard(snapshot.data())
          setWaiting(false)
        }
      })

    
    }

    getData()

    return ()=> {
      questionSubscriber();
      contestStatusSubscriber();
      scoreBoardSubscriber();  
    }
  },[])


  useEffect(()=>{
    if(ended)
      navigation.navigate('Home')
  }, [ended])



  return (
    <View style={styles.container}>
      {
        !waiting && !question && !scoreBoard ? 
          <View style={{backgroundColor:'grey', ...styles.center}}>
            <Text style={{color:'white'}}>Waiting for the Quizzz master to start the game!</Text>
          </View>
        :
          waiting ?
            <View style={{backgroundColor:'red', ...styles.center}}>
              <Text style={{color:'white'}}>Generating the scoreBoard</Text>
            </View>
          :
            scoreBoard ?
            <View style={{backgroundColor:'purple', ...styles.center}}>
              <Text style={{color:'white'}}>This is your scoreboard</Text>
            </View>
            :
            <View style={{backgroundColor:'green', ...styles.center}}>
              <Text style={{color:'white'}}>{question.questionText}</Text>
            </View>


      }
      {/* <Text>Come on, play the Quizzz!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  center:{
    flex:1,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
