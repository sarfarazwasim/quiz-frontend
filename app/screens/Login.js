import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Button, Pressable, ImageBackground, TextInput } from 'react-native';
import Theme from '../../styles/Theme';
import 'firebase/firestore'
import { CIHOST } from '../../constants/ciConfig';
import { useAuth } from '../../context/authContext';


export default function Login({navigation}) {

let [email, setEmail] = useState('');
let [password, setPassword] = useState('');
const Auth = useAuth()

  const setToken = ()=>{
    console.log('Email: ', email,' pasword: ',password)
    // console.log('setting email id')

    fetch(`${CIHOST}auth/loginWithError`,
    {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailId: email,
          password: password
        })
      })
      .then(res=>res.json())
      .then(data=>{
         console.log('login',data);
         if(data.role === 'Private')
         {
          //  navigation.navigate('Home')
          // alert('Login Successful')
          Auth.login(email)
          // AsyncStorage.setItem('emailId', email)
         }
         else
         alert('Only Players Can Login Here')

        
      })
      .catch(err=>{console.log(err, 'login error')
    alert('Invalid Credentials')})

  }
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/logingif.gif')}
                style={styles.back_image} /> */}
      {/* <ImageBackground source={require('./assets/quiz_back.jpg')}
      style={styles.back_image} /> */}
      <View style={styles.middle_body}>
        <View style={styles.inside_body}>
          <View>
            <View>
              
            </View>
            <View>
              <Text style={{fontSize:30, fontWeight: 'bold', textAlign:'center',color:'#00b6bd'}}>
               Quizzz</Text>
            </View>

            <View style={{marginTop: '3%', textAlign:'right'}}>
              <Text style={{fontSize:17, textAlign:'center',color:'#00b6bd'}}>
                LOGIN 
              </Text>
            </View>

            <View style={{marginTop: '3%'}}>
              {/* <Text style={{fontSize:17}}>
                Email : </Text> */}
                <TextInput
                  style={styles.input_box}
                  textContentType='emailAddress'
                  autoCompleteType='email'
                  // onClick={() => history.push('Upload')} 
                  onChangeText = { (e) => {setEmail(e)}}
                  // value={number}
                  placeholder="Email..."
                  keyboardType="email-address"
                />
            </View>

            <View style={{marginTop: '3%'}}>
              {/* <Text style={{fontSize:17}}>
                Email : </Text> */}
                <TextInput
                  style={styles.input_box}
                  textContentType='password'
                  autoCompleteType='password'
                  onChangeText = { (e) => {setPassword(e)}}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Password..."
                  keyboardType="visible-password"
                />
            </View>


        
            <Pressable style={styles.login_btn} onPress={setToken}>
                <Text style={{color:'#00b6bd'}}>LOGIN
                </Text>
            </Pressable>

            <View style={{marginTop:20}}>
              <Text style={{textAlign:'center',color:'#00b6bd'}}>
                New User?
              </Text>
            </View>
          <Pressable style={styles.register_btn}>
              <Text style={{color:'#00b6bd'}}>REGISTER</Text>
          </Pressable>
            
            {/* <Button title="Join" >
            </Button> */}


          </View>
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
    backgroundColor:'#ececec'
  },
  back_image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
    position: 'absolute',
    opacity:0.4
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
    elevation: 5,
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
