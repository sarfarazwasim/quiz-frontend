import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Button, Pressable, ImageBackground } from 'react-native';
import { storeStringData } from '../../constants/util';
import Theme from '../../styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContestDetails({navigation}) {
  useEffect(()=>{
    console.log('Async contest')
    console.log(AsyncStorage.getItem('selectedContest'))
    AsyncStorage.getItem('selectedContest')
    .then(data=>{
      data=JSON.parse(data);
      console.log(data)
      setData(data)
    })
    setData(AsyncStorage.getItem('selectedContest'))
    storeStringData('contestId', 'contest2')
    // console.log('contest', mydata)
  },[])

  let [isactive, setActive] = useState(true);
  let [quiztype, setstype] = useState("STATIC");
  let [data, setData] = useState(null);
  let [starttime, setstarttime] = useState("Monday 8 PM");
  let [endtime, setendtime] = useState("Monday 10 PM");
  let [duration, setDuration] = useState("15 Mins");
  let [clickedanswer, setClicked] = useState(-1);
  let answerstyle = {backgroundColor:'gray', color:'white'};

  const join = ()=>{
    const cid = 'contest2'
    console.log('Contest Id ', cid)
    AsyncStorage.setItem('contestId', cid)
    navigation.navigate('Dynamicpage')
  }

  const subscribe = ()=>{
    const cid = 'contest2'
    console.log('Contest Id ', cid)
    AsyncStorage.setItem('contestId', cid)
  }

  if(data)
  {
  return (
    <View style={styles.container}>
      <View style={styles.middle_body}>
        <View style={styles.inside_body}>
        <ImageBackground source={require('../../assets/images/placeholder-image.png')}
                style={styles.back_image} />
          <View style={{marginHorizontal: 20, minWidth: '75%'}}>
            <View>
              <Text numberOfLines={2} style={{fontSize:30, fontWeight: 'bold'
              ,textAlign:'center', textTransform:'uppercase',marginTop: 30}}>
                {data.contestName}</Text>
            </View>

            <View style={{marginTop: '3%', textAlign:'right'}}>
              <Text style={{fontSize:17, textAlign:'right'}}>
                By - Quizz Master </Text>
              <Text style={{fontSize:18, fontWeight: 'bold'}}>
             
              </Text>
            </View>

            <View style={{marginTop: '3%'}}>
              <Text style={{fontSize:17}}>
                Quizz Type : </Text>
              <Text style={{fontSize:18, fontWeight: 'bold'}}>
              {data.contestType}
              </Text>
            </View>

            <View style={{marginTop: '3%'}}>
              <Text style={{fontSize:17}}>
                Starts At : </Text>
              <Text style={{fontSize:18, fontWeight: 'bold'}}>
              {(new Date(data.startDateTime).toString()).substr(0,25)}
              </Text>
            </View>


            <View style={{marginTop: '3%'}}>
              <Text style={{fontSize:17}}>
                Closes At : </Text>
              <Text style={{fontSize:18, fontWeight: 'bold'}}>
              {(new Date(data.endDateTime).toString()).substr(0,25)}
              </Text>
            </View>

            <View  style={{marginTop: '3%'}}>
              <Text style={{fontSize:17}}>
                Duration: </Text>
              <Text style={{fontSize:18, fontWeight: 'bold'}}>
              {data.durationTime} Mins
              </Text>
            </View>

            {/* <Button title="Subscribe" style={styles.subs_btn}>
            </Button> */}
            <Pressable style={styles.subs_btn} onPress={()=>subscribe()}>
                <Text style={{color:'white'}}>SUBSCRIBE</Text>
            </Pressable>

            {isactive ? (
              <Pressable style={styles.join_btn} onPress={()=>join()}>
              <Text style={{color:'white'}}>JOIN</Text>
          </Pressable>
            ) : (
              <Pressable style={styles.join_btn_disabled} disabled>
                <Text style={{color:'white'}}>QUIZ YET TO START</Text>
            </Pressable>
            )}
            {/* <Button title="Join" >
            </Button> */}
            <View style={{marginTop: 40}}>

            </View>

          </View>
        </View>
          
      </View>
      <StatusBar style="auto" />
    </View>
  );
          }
          else
          {
            return(<View></View>)
          }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back_image: {
    // flex: 1,
    width: '100%',
    height: '92%',
    resizeMode: 'contain',
    position: 'absolute',
    opacity: 0.13
  },
  middle_body: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Theme.bg_level2,
  },
  inside_body: {
    
    flex: 1,
    justifyContent:'center',
    flexDirection:'row',
    maxHeight: '90%',
    minHeight: '76%',
    // padding: '2%',
    maxWidth: '90%',
    backgroundColor: 'white',
    borderWidth:2,
    borderColor: '#00b6bd',
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    // width: '100%',
    // marginVertical: 10,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {width: 22, height: 41},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
    zIndex: 2
  },
  makecenter: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  question_box: {
    backgroundColor: 'linear-gradient(180deg, #00b6bd 0%, rgba(137, 202, 203, 0.97) 100%);',
    // minHeight: '10vh',
    minWidth: '90%',
    // maxWidth: '100%',
    // background: linear-gradient(180deg, #01CCCE 0%, rgba(137, 202, 203, 0.97) 100%),
    borderRadius: 20,
    // display: flex,
    // justify-content: space-between,
    // align-items: center,
    padding: '2%',
    fontSize: 400
  },
  ques_num: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'left',
    // backgroundColor: 'red',
    position: 'absolute',
    left: 20,
    fontSize: 17
  },
  countdown: {
    textAlign: 'right',
    

  },
  justifycenter: {
    // flex: 1,
    alignItems: 'baseline',
    width: '100%',
    height: 30,
    flexDirection: 'row',
    position: 'relative'
    // justifyContent: 'center',
  },
  ques_time:{
    // backgroundColor: 'pink',
    position: 'absolute',
    left: '75%',
    fontSize: 18
  },
  ques_image: {
    flex:1,
    height: null,
    width: null,
    resizeMode: 'contain'
  },
  option_box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '47%',
    maxWidth: '47%',
    minHeight: 40,
    padding: '2%',
    backgroundColor: 'white',
    fontSize: 15,
    marginBottom: '2%',
    borderRadius: 15
  },
  subs_btn: {
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#273238',
    elevation: 5
  },
  join_btn: {
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#273238',
    elevation: 5
  },
  join_btn_disabled: {
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
    elevation: 0
  },
    button_skip: {
    minWidth: '20%',
    height: 40,
    padding: '2%',
    backgroundColor: 'orange',
    fontSize: 15,
    marginBottom: '2%',
    color: 'red',
    textAlign: 'center'
  },
  button_quit: {
    minWidth: '20%',
    height: 40,
    padding: '2%',
    backgroundColor: 'red',
    fontSize: 15,
    marginBottom: '2%',
    color: 'white',
    textAlign: 'center',
    left:0

  }
});
