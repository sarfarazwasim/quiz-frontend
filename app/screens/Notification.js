// import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import NotificationCard from '../../components/NotificationCard';
import Theme from '../../styles/Theme';
import 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CINOTIFICATION } from '../../constants/ciNotificationConfig';


export default function Notification() {

  const [datas, setData] = useState([])
  const notification = [
    {
      message: 'Cricket Carnage 🏏 is Live. Play now'
    },
    {
      message: '🎬 Results are out for `Bollywood Buzz`. Check your rank'
    },
    {
      message: 'Here are the top 10 quizzes of the week'
    },
    {
      message: '`Guess The Actor 👨🏻‍🎤` starts in an hour'
    },
    {
      message: 'You have not completed `All about sports`. Finish the quiz before it ends'
    },
    {
      message: 'Love Science 🔬? Play this Quiz and showcase your knowledge'
    },
    {
      message: 'Long time no see 😢. You haven`t played a quiz since 2 days. Play now'
    },
    {
      message: 'You were among the Top 3 🏆 when you last played this quiz. Play the new edition and grab the top spot'
    },
    {
      message: 'Play this Superhero quiz 🦸'
    },
    {
      message: 'Tap to see the trending quiz of the Day'
    }
  ]

  // http://10.177.68.11:8088/notification/get?emailId=tamil@gmail.com&appId=Instagram%27

  useEffect( ()=> {
      AsyncStorage.getItem('emailId')
      .then(data=>{
        const myemail= data
      // http://localhost:
      // fetch(`${HOST}5000/contestQuestion/all/${categories_data[index].categoryName}/5/1`,{
      console.log('email is', myemail)
      fetch(`${CINOTIFICATION}8088/notification/get?emailId=${myemail}&appId=quiz`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res1=>res1.json())
        .then(data1=>{
           console.log('notification',data1);
           setData(data1)

        })
        .catch(err=>console.log(err, 'notification error'))
      })
},[])


const deleteNotification = (cid) =>
{
  fetch(`${CINOTIFICATION}8088/notification/setviewed/${cid}`,
    {

        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
         console.log('delete notification',data);
        // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
      })
      .catch(err=>console.log(err, 'delete error'))

}
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notification</Text>
      {notification.map((item, index)=> 
      <View style={styles.mynotification}>
      <NotificationCard text={item.message} style={{minWidth:"100%"}}/>
      
        <Text onPress= {()=>{deleteNotification(item.id)}} style={styles.closebutton}>X</Text>
      
      </View>
      )}
      {/* // <NotificationCard text='vivek'/>
      // <NotificationCard text='vivek'/>
      // <NotificationCard text='vivek'/>
      // <NotificationCard text='vivek'/>
      // <NotificationCard text='vivek'/> */}
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
  },
  mynotification:{
    minWidth:'100%',
    flex:1,
    flexDirection:"row",
    justifyContent:'space-evenly'
  },
  closebutton:{
    maxWidth:'10%',
    marginTop:20,
    marginLeft: -15,
    fontWeight: 'bold'
    // borderWidth: 1,
    // borderColor: 'gray',
    // maxHeight:
  }
});
