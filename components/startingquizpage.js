import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Button, Pressable, ImageBackground, TextInput } from 'react-native';
export default function App() {


  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/cubeloading.gif')}
                style={styles.back_image} />
      <View style={{marginTop:'10%'}}>
        <Text style={{fontSize: 25, color:'#00aeef', fontWeight:'bold'}}>
          Starting Quizzz
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    backgroundColor:'#ececec'
  },
  back_image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    // position: 'absolute',
    opacity:1,
  },
  middle_body: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inside_body: {
    flex: 1,
    justifyContent:'center',
    flexDirection:'row',
    marginTop: '10%',
    height: '90%',
    padding: '2%',
    maxWidth: '90%',
    backgroundColor: '#273238' ,
    // backgroundColor: 'linear-gradient(180deg, #01CCCE 0%, rgba(137, 202, 203, 0.97) 100%)',
    borderRadius: 8,
    paddingVertical: 45,
    // paddingHorizontal: 25,
    // width: '100%',
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {width: 22, height: 41},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
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
  login_btn: {
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#273238',
    borderWidth: 1,
    elevation: 10,
    borderColor: '#00b6bd'
  },
  register_btn: {
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#273238',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#00b6bd'
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

  },
  input_box: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth:'90%',
    backgroundColor: '#e0e0e0',
    borderWidth:1,
    borderColor: 'white',
    borderRadius: 3
  }
});
