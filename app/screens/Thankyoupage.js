import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import 'firebase/firestore'

export default function App({navigation}) {

  useEffect(()=> {
    setQuestion(false)
    
      // (AsyncStorage.getItem('contestduration'))
      // AsyncStorage.getItem('contestduration')
      // .then(data=>{
      //     console.log('time',typeof JSON.parse(data))
      //     setMinutes(JSON.parse(data))
      //     setSeconds(0)
      // })
      // const myemail = "sarfaraz@gmail.com"
      // // http://localhost:
      // // fetch(`${HOST}5000/contestQuestion/all/${categories_data[index].categoryName}/5/1`,{
      // fetch(`${HOST}5000/contest/join/33383668-dbce-4c4e-bba2-73a1c465bda5?emailId=${myemail}`,{
      //     method: 'POST',
      //     headers:{
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //   .then(res1=>console.log(res1))
      //   .then(data1=>{
      //      console.log('joinquiz',data1);

      //      fetch(`${HOST}5000/contestQuestion/all/33383668-dbce-4c4e-bba2-73a1c465bda5`,{
      //         method: 'GET',
      //         headers:{
      //           'Content-Type': 'application/json'
      //         }
      //       })
      //       .then(res=>res.json())
      //       .then(data=>{
      //          console.log('staticquiz',data);
      //          setStaticquestions(data)
      //          setQuizlength(data.length)
      //          setTimeout(() => 
      //         { 
      //            setQuestion(true)
      //         }, 1000);

      //         // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
      //       })
      //       .catch(err=>console.log(err, 'static error'))
      //     // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
      //   })
      //   .catch(err=>console.log(err, 'join error'))

        setTimeout(() => 
      {
        navigation.navigate('Home')
      }, 3000);
      },[])
  

  return (
    <View style={styles.container}>
        <View style={styles.middle_body}>
        <View style={{backgroundColor:'#e8f1f1f0', width:'100%', height:750, marginTop:'10%',
      flex: 1, alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../../assets/images/tick.gif')}
                style={styles.tick_image} />
          <Text style={{textAlign:'center',fontSize: 25}}>
            Thank You For Playing
          </Text>
          <Text style={{textAlign:'center',fontSize: 20, marginTop: 50}}>
            Redirecting to Home...
          </Text>
          <Text style={{textAlign:'center',fontSize: 25}}>
          </Text>
        </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  back_image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
    position: 'absolute'
  },
  middle_body: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  inside_body: {
    flex: 1,

    marginTop: '10%',
    height: '90%',
    padding: '2%',
    minWidth: '90%',
    backgroundColor: '#e8f1f1f0',
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
  tick_image: {
    width: 200,
    height: 200

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
  button_next: {
    minWidth: '20%',
    height: 40,
    padding: '2%',
    backgroundColor: '#00b6bd',
    fontSize: 15,
    marginBottom: '2%',
    color: 'red',
    textAlign: 'center'
  },
  button_submit_disabled: {

    opacity:0,
    minWidth: '20%',
    height: 40,
    padding: '2%',
    backgroundColor: 'gray',
    fontSize: 15,
    marginBottom: '2%',
    color: 'red',
    textAlign: 'center',
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
