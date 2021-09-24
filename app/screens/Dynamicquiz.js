import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import QuizStartPage from '../../components/startingquizpage'
import LeaderBoard from '../../components/leaderboard'
import GeneratingSocreBoard from '../../components/loadingpage'
// import Questions from '../../assets/questionset.json'
import Theme from '../../styles/Theme';
import firebase from '../../firebase/Firebase';
import 'firebase/firestore'

export default function Play({navigation}) {
  const [ended, setEnded] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [question, setQuestion] = useState(null)
  const [scoreBoard, setScoreBoard] = useState(null)

  let [isanswered, setAnswered] = useState(false);
  let [currentquestion, setCurrent] = useState(0);
  let [correctanswer, setCorrect] = useState(-1);
  let [clickedanswer, setClicked] = useState(-1);
  let answerstyle = {backgroundColor:'gray', color:'white'};
  let [option1, setastyle1] = useState({});
  let [option2, setastyle2] = useState({});
  let [option3, setastyle3] = useState({});
  let [option4, setastyle4] = useState({});
  let [totalcorrect, setTotal] = useState(0);
  let [mytimeleft, setTimeleft] = useState(30);
  let [isloading, setIsloading] = useState(0);
  let [isleader, setIsleader] = useState(0);

  let myquestion = {
    "questionId": "6a107f93-ea61-44f9-ab5f-74992272ceac",
    "questionText": "vivek",
    "option1": "one",
    "option2": "two",
    "option3": "three",
    "option4": "four",
    "rightAnswer": null,
    "answerType": "MULTIPLE",
    "questionType": "IMAGE",
    "difficultyLevel": "EASY",
    "mediaFileUrl": null,
    "category": "EDUCATION"
}

  let totalquestions = 7
  const [seconds, setSeconds] = React.useState(30);
  const [minutes, setMinutes] = React.useState(0);
  const [zero, setZero] = React.useState('');
  const [quizover, setOver] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => 
  //   {
  //     if(seconds < 11)
  //       setZero('0')
  //     if(seconds > 0)
  //       setSeconds(seconds - 1)
  //     if(seconds == 0 && minutes > 0)
  //     {
  //       setSeconds(59)
  //       setMinutes(minutes-1)
  //       setZero('')
  //     }
  //     if(seconds == 0 && minutes == 0)
  //     {
  //       answerbutton(0)
  //     }
  //   }, 1000);
  
  //   });


  const answerbutton = (myanswer) =>
  {
    setIsloading(1)
    question.clicked=myanswer
    setClicked(myanswer-1)
    if(myanswer === 1)
    {
      setastyle1(answerstyle)
      setastyle2({})
      setastyle3({})
      setastyle4({})
    }
    else if(myanswer === 2)
    {
      setastyle2(answerstyle)
      setastyle1({})
      setastyle3({})
      setastyle4({})
    }
    else if(myanswer === 3)
    {
      setastyle3(answerstyle)
      setastyle2({})
      setastyle1({})
      setastyle4({})
    }
    else if(myanswer === 4)
    {
      setastyle4(answerstyle)
      setastyle2({})
      setastyle3({})
      setastyle1({})
    }
    setCorrect(Questions[currentquestion].correctIndex)
    setAnswered(true)
    if(clickedanswer===Questions[currentquestion].rightAnswer)
    {
    }
    
    
    // setTimeout(function(){ 
    //   if(currentquestion < Questions.length-1)
    // {
    //   // alert(currentquestion)
    //   setCurrent(currentquestion+1)

    //   setastyle1({})
    //   setastyle2({})
    //   setastyle3({})
    //   setastyle4({})
    //   setIsleader(1)
    //   setTimeout(function(){ 
     
    //     setIsloading(0)
    //     setIsleader(0)

    //   }, 3000);
    // }
    // }, 3000);
      setCorrect(-1)
      setAnswered(false)
  }

  const quitbutton = () =>
  {
    setOver(true)
  }


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
          <QuizStartPage/>
        :
          waiting ?
            <GeneratingSocreBoard/>
          :
            scoreBoard ?
           <LeaderBoard/>
            :
            <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/quiz_back.jpg')}
      style={styles.back_image} />
      
        <View style={styles.middle_body}>
        <View style={styles.inside_body}>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent:'space-between'}}>
              <View>
                {/* <Text style={{fontSize: 17}}>
                  Q {currentquestion+1}/{totalquestions}</Text> */}
              </View>
              <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'center',marginBottom:'-15%'}}>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'flex-end', maxWidth:'95%'}}>
              <TouchableOpacity style={styles.button_quit} onPress= {()=>{quitbutton()}}>
                <Text style={{fontSize: 17, textAlign:'center', color:'white'}}>Quit</Text>
              </TouchableOpacity>
              
          </View>
          </View>
          </View>


          
          <View style={{flex: 1, marginTop:"-20%",alignItems:'center',
          justifyContent:'center', marginBottom: '3%'}}>
            <View>
                <Text style={{fontSize: 20}}>{minutes}:{zero}{seconds}</Text>
            </View>
              <View style={{backgroundColor: 'linear-gradient(180deg, #00b6bd 0%, rgba(137, 202, 203, 0.97) 100%);',
                padding: '1%', minWidth: '90%', maxWidth: '90%', borderRadius:20,
              flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize: 17, textAlign:'center'}}>
                  {question.questionText}
                  </Text>
              </View>
          </View>

          {question.mediaFileUrl? (
            <View style={{flex: 1, flexDirection: 'row', 
            justifyContent:'center', marginBottom: '5%'}}>
              <Image source={{uri:question.mediaFileUrl}} 
              style={styles.ques_image}/>
            </View>
          ):(
            <View></View>
          )}
          

          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'space-around', maxWidth:'95%'}}>
              <TouchableOpacity style={{...styles.option_box,...option1}} onPress= {()=>{answerbutton(1)}}>
              <View >
                <Text style={{fontSize: 17, textAlign:'center'}}>
                  {question.option1}
                  </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={{...styles.option_box,...option2}} onPress= {()=>{answerbutton(2)}}>
              <View >
                <Text style={{fontSize: 17, textAlign:'center'}}>
                {question.option2}
                  </Text>
              </View>
              </TouchableOpacity>

          </View>
          </View>
          

          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'center', marginBottom:'5%'}}>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'space-around', maxWidth:'95%'}}>
            <TouchableOpacity style={{...styles.option_box,...option3}} onPress= {()=>{answerbutton(3)}}>
              <View >
                <Text style={{fontSize: 17, textAlign:'center'}}>
                {question.option3}

                  </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={{...styles.option_box,...option4}} onPress= {()=>{answerbutton(4)}}>
              <View >
                <Text style={{fontSize: 17, textAlign:'center'}}>
                {question.option4}

                  </Text>
              </View>
              </TouchableOpacity>

          </View>
          </View>
              
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'space-between', maxWidth:'95%'}}>
              
              
              
          </View>
          </View>


          
          
        </View>
          
      </View>
      
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
  tick_image: {
    width: 200,
    height: 200

  }
});

