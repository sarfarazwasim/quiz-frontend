import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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

  const handleSearch = function(e){
    if(e.nativeEvent.key==="Enter"){
      Keyboard.dismiss();
      return;
    }
  }

  const handleSearchTextChange = (text)=>{
    setSearchText(text)

    fetch(`${HOST}3000/contestSearch/wc?contestName=${text}`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          }
        })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data)
        setContests(data)
      else
        setContests([])
    })
    .catch(err=>console.log(err))
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
        {contests.map(({imageUrl, contestName, startDateTime}, index)=>
          <TouchableOpacity key={index} onPress={()=>navigation.navigate('ContestDetails')} activeOpacity={0.9}>
            <Contest  imageUri={imageUrl} contestName={contestName} date={toDayMonthYear(new Date(startDateTime))} />  
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
