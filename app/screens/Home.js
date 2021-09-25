import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ScrollView, TouchableOpacity } from 'react-native';
import Contest from '../../components/Contest';
import HorizontalSlider from '../../components/HorizontalSlider';
import { HOST } from '../../constants/hostConfig';
import { toDayMonthYear } from '../../constants/util';
import { useAuth } from '../../context/authContext';
import Theme from '../../styles/Theme';

// const toDayMonthYear =()=>{
//   let date = new Date().toLocaleDateString().split('/')
//   const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   let d = `${Number(date[1])} ${month[Number(date[0])-1]} ${date[2]}`
//   return d;
// }

export default function Home({navigation}) {
  const [categories, setCategories] = useState([])
  const [contests, setContests] = useState({})
  const Auth = useAuth()

  useEffect(()=>{
    const categories_data = [
      {
        categoryName: 'Sport',
        categoryId: 'c1'
      },
      {
        categoryName: 'Technology',
        categoryId: 'c1'
      },
      {
        categoryName: 'Movie',
        categoryId: 'c1'
      },
      {
        categoryName: 'Automobile',
        categoryId: 'c1'
      },
      {
        categoryName: 'Food',
        categoryId: 'c1'
      },
      {
        categoryName: 'Travel',
        categoryId: 'c1'
      },
      ,
      {
        categoryName: 'Education',
        categoryId: 'c1'
      },
      {
        categoryName: 'Cloth',
        categoryId: 'c1'
      }
    ]
    

    let contests_data = {}
    // contests_data[categories_data[0].categoryName] = [
    //   {
    //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDc5X3OjHsqcXLdXuFHSqj8_ZyeLmAVGBDg&usqp=CAU',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   }
    // ]

    // contests_data[categories_data[1].categoryName] = [
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   }
    // ]

    // contests_data[categories_data[2].categoryName] = [
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   }
    // ]

    // contests_data[categories_data[3].categoryName] = [
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   }
    // ]

    // contests_data[categories_data[4].categoryName] = [
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   }
    // ]

    // contests_data[categories_data[5].categoryName] = [
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   },
    //   {
    //     imageUrl:'',
    //     contestName: 'Nulla tempor labore veniam dolore ex.',
    //     startDateTime: '25 sep'
    //   }
    // ]

    const getContest = async (index)=>{
      // console.log(categories_data[index])
      if(categories_data && categories_data[index])
        fetch(`${HOST}3000/contestSearch/category/${categories_data[index].categoryName}/5/1`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          // console.log(data, 'buy');
          setContests(state=>({...state, [categories_data[index].categoryName]: data}))
        })
        .catch(err=>console.log(err, 'sad'))

    }


    setCategories(categories_data)
    for(let i=0; i<categories_data.length; i++)
      getContest(i)
    
  }, [])


  const deleteToken = ()=>{
    console.log('deleting email id')
    AsyncStorage.removeItem('emailId')
  }

  const selectContest = (mycontest)=>{
    console.log('select contest func')
    AsyncStorage.setItem('selectedContest',JSON.stringify(mycontest))
    .catch(err=>console.log(err))
    navigation.navigate('ContestDetails')
  }
  
  return (
    <View style={styles.container}>
      {/* <Text onPress={deleteToken}>unset Token</Text> */}
      <Text onPress={()=>{console.log(Auth.logout())}}>Logout</Text>
      {/* <Text onPress={()=>navigation.navigate('ContestDetails')}>click here</Text> */}
      <ScrollView >
        {categories.map((category, index)=>      
          <HorizontalSlider key={index} heading={category.categoryName}>
            {contests[category.categoryName]?.map(({imageUrl, contestName, startDateTime}, index)=>
                <TouchableOpacity key={index} onPress={()=>{
                  selectContest(contests[category.categoryName][index]); 
                  console.log('mycat',contests[category.categoryName][index])
                  }} activeOpacity={0.9}>
                  <Contest  imageUri={imageUrl} contestName={contestName} date={toDayMonthYear(new Date(startDateTime))} />  
                </TouchableOpacity>  
              )}
            
          </HorizontalSlider>
        )}
        
        
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg_level2,
    paddingBottom: 60
    
  },
});
