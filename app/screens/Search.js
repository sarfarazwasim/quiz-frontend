import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import firestore from '../../firebase/Firebase';
import firebase from '../../firebase/Firebase';
import 'firebase/firestore'
import Theme from '../../styles/Theme';
import { HOST } from '../../constants/hostConfig';
import Contest from '../../components/Contest';
import { toDayMonthYear } from '../../constants/util';


export default function Search({navigation}) {
  const [user, setUser] = useState({})
  const [searchText, setSearchText] = useState('')
  const [contests, setContests] = useState([])
  const conte = [{
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDc5X3OjHsqcXLdXuFHSqj8_ZyeLmAVGBDg&usqp=CAU',
    contestName: 'All about Sports',
    startDateTime: 'Tomorrow, 8:00 PM'
  },
  {
    imageUrl:'https://play-lh.googleusercontent.com/UDuU8aULGe6jPLfN-zZlk3mHSD75p4SucQKYRvCuDAQ7nHkYSKnyuMwrbYwceTaEfNQ',
    contestName: 'Cricket Carnage',
    startDateTime: '20 Mar, 5:00 PM'
  },
  {
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlj_peuTxYWTskuQCDSnVLXjiF4AJDrE99N_9-fgdLn38wqL8EPTRRYbqKMeGhBRGVfCU&usqp=CAU',
    contestName: 'Football Fantasy',
    startDateTime: '25 Mar, 10:00 PM'
  },
  {
    imageUrl:'https://is2-ssl.mzstatic.com/image/thumb/Purple18/v4/af/35/c7/af35c73d-b073-dafa-0791-f5171a7e6a7f/source/512x512bb.jpg',
    contestName: 'Basketball Trivia',
    startDateTime: '26 Mar 12:00 PM'
  },
  {
    imageUrl:'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/21193605/IPL-Quiz.jpg',
    contestName: 'IPL Mania',
    startDateTime: '26 Mar 6:00 PM'
  },
  {
    imageUrl:'https://www.logo-designer.co/wp-content/uploads/2016/04/tokyo-2020-olympics-logo-design-final.png',
    contestName: 'Olympics Quiz',
    startDateTime: '26 Mar 3:00 PM'
  },
  {
    imageUrl:'https://is2-ssl.mzstatic.com/image/thumb/Purple18/v4/af/35/c7/af35c73d-b073-dafa-0791-f5171a7e6a7f/source/512x512bb.jpg',
    contestName: 'Basketball Trivia',
    startDateTime: '26 Mar 12:00 PM'
  },
  {
    imageUrl:'https://is2-ssl.mzstatic.com/image/thumb/Purple18/v4/af/35/c7/af35c73d-b073-dafa-0791-f5171a7e6a7f/source/512x512bb.jpg',
    contestName: 'Basketball Trivia',
    startDateTime: '26 Mar 12:00 PM'
  }]
  const handleSearch = function(e){
    if(e.nativeEvent.key==="Enter"){
      Keyboard.dismiss();
      return;
    }
  }

  const handleSearchTextChange = (text)=>{
    setSearchText(text)

    // fetch(`${HOST}3000/contestSearch/wc?contestName=${text.toLowerCase()}`,{
    //       method: 'POST',
    //       headers:{
    //         'Content-Type': 'application/json'
    //       }
    //     })
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data)
    //   if(data)
    //     setContests(data)
    //   else
    //     setContests([])
    // })
    // .catch(err=>console.log(err))
  }

  useEffect(()=>{
    let users=null;
    const getData = async()=>{
      console.log('came in')
      users = await firebase.firestore().collection("users").get();
      users.forEach(user=>{
        console.log(user.data())
        // console.log(user.get())
      })
      // console.log(users.size)
    }

    //TODO subscription code for firestore

    // const userSubscriber = firebase.firestore()
    //   .collection('users')
    //   .doc('vivekabc')
    //   .onSnapshot(snapshot=>{
        
    //     console.log(snapshot.data())
    //     if(snapshot.data())
    //       setUser(snapshot.data())
    //   })

    

    // return ()=> userSubscriber();
  },[])
  const selectContest = (mycontest)=>{
    console.log('select contest func')
    AsyncStorage.setItem('selectedContest',JSON.stringify(mycontest))
    .catch(err=>console.log(err))
    navigation.navigate('ContestDetails')
  }
  return (
    <View style={styles.container}>
      {/* <Text onPress={()=>navigation.navigate('ContestDetails')}>click here</Text> */}
      <View style={styles.searchBarWrapper} >
        <View style={styles.searchIconWrapper}>
          <Ionicons name='search' style={styles.searchIcon} size={24} color={Theme.textSecondary} />
        </View>
        <TextInput style={styles.searchBar} value={searchText} onChangeText={text=>handleSearchTextChange(text)} returnKeyType='search' onKeyPress={handleSearch} />
      </View>
      <ScrollView contentContainerStyle={styles.searchResultWrapper}>
        {conte.map(({imageUrl, contestName, startDateTime}, index)=>
          <TouchableOpacity key={index} onPress={()=>{
            selectContest(contests[index]); 
            console.log('mycat',contests[index])
            }} activeOpacity={0.9}>
            <Contest  imageUri={imageUrl} contestName={contestName} date={startDateTime} />  
          </TouchableOpacity>  
        )}
        
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const searchBarHeight = 46
const searchBarRadius = 50

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level2,
    
  },
  searchBarWrapper: {
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: 12,
    flexDirection: 'row',
    // backgroundColor: 'green'
    
  },
  searchBar: {
    backgroundColor: Theme.bg_level1,
    height: searchBarHeight,
    borderTopRightRadius: searchBarRadius,
    borderBottomRightRadius: searchBarRadius,
    paddingLeft: 8,
    width: '75%'
  },
  searchIcon:{
    
  },
  searchIconWrapper:{
    backgroundColor: Theme.textPrimaryLight,
    height: searchBarHeight,
    borderTopLeftRadius: searchBarRadius,
    borderBottomLeftRadius: searchBarRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12
  },
  searchResultWrapper:{
    paddingTop: 20,
    paddingBottom: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    // justifyContent: 'space-evenly',
    // backgroundColor: 'black'
  }
});
