import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import QuizStartPage from '../../components/startingquizpage'
import LeaderBoard from '../../components/leaderboard'
import GeneratingSocreBoard from '../../components/loadingpage'
import Questions from '../../assets/questionset.json'
import Theme from '../../styles/Theme';
import firebase from '../../firebase/Firebase';
import { HOST } from '../../constants/hostConfig';
import 'firebase/firestore'


export default function Play({navigation}) {
  const [ended, setEnded] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [question, setQuestion] = useState(false)
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
  // let [totalcorrect, setTotal] = useState(0);
  let [skipcount, setSkipcount] = useState(0);
  // let [Questions, setStaticquestions] = useState([]);
  let [quizlength, setQuizlength] = useState(0);


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
  const [seconds, setSeconds] = React.useState(null);
  const [minutes, setMinutes] = React.useState(null);
  const [zero, setZero] = React.useState('');
  const [quizover, setOver] = React.useState(false);

  useEffect(()=> {
      setQuestion(false)
      
        // (AsyncStorage.getItem('contestduration'))
        // AsyncStorage.getItem('contestduration')
        // .then(data=>{
            // console.log('time',typeof JSON.parse(data))
            setMinutes(10)

            setSeconds(0)
        // })

    //     AsyncStorage.getItem('emailId')
    //     .then(myemail=>{
    //       AsyncStorage.getItem('contestId')
    //   .then(cid=>{
    //     fetch(`${HOST}5000/contest/join/${cid}?emailId=${myemail}`,{
    //         method: 'POST',
    //         headers:{
    //           'Content-Type': 'application/json'
    //         }
    //       })
    //       .then(res1=>console.log(res1))
    //       .then(data1=>{
    //          console.log('joinquiz',data1);

    //          fetch(`${HOST}5000/contestQuestion/all/${cid}`,{
    //             method: 'GET',
    //             headers:{
    //               'Content-Type': 'application/json'
    //             }
    //           })
    //           .then(res=>res.json())
    //           .then(data=>{
    //              console.log('staticquiz',data);
    //              setStaticquestions(data)
    //              setQuizlength(data.length)
    //              setTimeout(() => 
    //             { 
    //                setQuestion(true)
    //             }, 1000);

    //             // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
    //           })
    //           .catch(err=>console.log(err, 'static error'))
    //         // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
    //       })
    //       .catch(err=>console.log(err, 'join error'))
    //   })
    // })
  },[])

  React.useEffect(() => {
      setTimeout(() => 
      {
        if(seconds < 11)
          setZero('0')
        if(seconds > 0)
          setSeconds(seconds - 1)
        if(seconds == 0 && minutes > 0)
        {
          setSeconds(59)
          setMinutes(minutes-1)
          setZero('')
        }
        if(seconds == 0 && minutes == 0)
        {
          setOver(true)
        }
      }, 1000);
    
  });

  const answerbutton = (myanswer,qid) =>
  {
    Questions[currentquestion].preAnswer=myanswer
    if(Questions[currentquestion].isskipped===true)
    {
      setSkipcount(skipcount-1)
      Questions[currentquestion].isskipped=false
    }
    let answertext= ''
    setClicked(myanswer-1)
    if(myanswer === 1)
    {
        answertext= 'option1'
      setastyle1(answerstyle)
      setastyle2({})
      setastyle3({})
      setastyle4({})
    }
    else if(myanswer === 2)
    {
        answertext= 'option2'
      setastyle2(answerstyle)
      setastyle1({})
      setastyle3({})
      setastyle4({})
    }
    else if(myanswer === 3)
    {
        answertext= 'option3'
      setastyle3(answerstyle)
      setastyle2({})
      setastyle1({})
      setastyle4({})
    }
    else if(myanswer === 4)
    {
        answertext= 'option4'
      setastyle4(answerstyle)
      setastyle2({})
      setastyle3({})
      setastyle1({})
    }
    AsyncStorage.getItem('emailId')
        .then(myemail=>{
    AsyncStorage.getItem('contestId')
      .then(cid=>{
    fetch(`${HOST}4000/answer?emailId=${myemail}`,
    {

        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: "",
            contestId: cid,
            questionId: qid,
            answer: JSON.stringify(myanswer)
        })
      })
      .then(res=>res.json())
      .then(data=>{
         console.log('staticquiz answer',data);
        // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
      })
      .catch(err=>console.log(err, 'answer error'))
    })
  })

    setCorrect(Questions[currentquestion].correctIndex)
    setAnswered(true)
  }

  const nextbutton = () =>
  {
    // alert('my ' + clickedanswer + ' correct ' + Questions[currentquestion].correctIndex)
    Questions[currentquestion].isskipped=false
    if(clickedanswer===Questions[currentquestion].rightAnswer)
    {
    }
    if(currentquestion < 10)
    {
      setCurrent(currentquestion+1)

    }
    
    if(Questions[currentquestion+1].preAnswer && false)
    {
        if(Questions[currentquestion+1].preAnswer === 1)
        {
          setastyle1(answerstyle)
          setastyle2({})
          setastyle3({})
          setastyle4({})
        }
        else if(Questions[currentquestion+1].preAnswer === 2)
        {
          setastyle2(answerstyle)
          setastyle1({})
          setastyle3({})
          setastyle4({})
        }
        else if(Questions[currentquestion+1].preAnswer === 3)
        {
          setastyle3(answerstyle)
          setastyle2({})
          setastyle1({})
          setastyle4({})
        }
        else if(Questions[currentquestion+1].preAnswer === 4)
        {
          setastyle4(answerstyle)
          setastyle2({})
          setastyle3({})
          setastyle1({})
        }
    }
    else
    {
      setCorrect(-1)
      setAnswered(false)
      setastyle1({})
      setastyle2({})
      setastyle3({})
      setastyle4({})
    }
  }

  const prevbutton = () =>
  {
    
    if(currentquestion <= Questions.length)
    {
      setCurrent(currentquestion-1)
      // alert(currentquestion)
    }
    
    if(Questions[currentquestion-1].preAnswer)
    {
      setAnswered(true)  
      if(Questions[currentquestion-1].preAnswer === 1)
        {
          setastyle1(answerstyle)
          setastyle2({})
          setastyle3({})
          setastyle4({})
        }
        else if(Questions[currentquestion-1].preAnswer === 2)
        {
          setastyle2(answerstyle)
          setastyle1({})
          setastyle3({})
          setastyle4({})
        }
        else if(Questions[currentquestion-1].preAnswer === 3)
        {
          setastyle3(answerstyle)
          setastyle2({})
          setastyle1({})
          setastyle4({})
        }
        else if(Questions[currentquestion-1].preAnswer === 4)
        {
          setastyle4(answerstyle)
          setastyle2({})
          setastyle3({})
          setastyle1({})
        }
    }
    else
    {

      setCorrect(-1)
      setAnswered(false)
      setastyle1({})
      setastyle2({})
      setastyle3({})
      setastyle4({})
    }
  }

  const skipbutton = () =>
  {
    Questions[currentquestion].isskipped=true
    Questions[currentquestion].preAnswer=null
    const cid = "33383668-dbce-4c4e-bba2-73a1c465bda5"
    const myemail="sarfaraz@gmail.com"
    if(skipcount < 1)
    {
    // fetch(`${HOST}5000/contestQuestion/all/f3057d8a-3939-4710-8ccd-da9c410d0d5f`,{
    fetch(`${HOST}5000/contest/skipped/${cid}?emailId=${myemail}`,
    {

        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res)
      .then(data=>{
         console.log('skip staticquiz',data);
        // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
      })
      .catch(err=>console.log(err, 'skip error'))

    }
    setSkipcount(skipcount+1)

    setCurrent(currentquestion+1)

    setCorrect(-1)
    setAnswered(false)
    setastyle1({})
    setastyle2({})
    setastyle3({})
    setastyle4({})
  }
  const quitbutton = () =>
  {
    AsyncStorage.getItem('emailId')
        .then(myemail=>{
    AsyncStorage.getItem('contestId')
      .then(cid=>{
    fetch(`${HOST}5000/contest/endByPlayer/${cid}?emailId=${myemail}`,
    {

        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res)
      .then(data=>{
         console.log('end staticquiz',data);
        //  alert('end')
         console.log('end')
        // setContests(state=>({...state, [categories_data[index].categoryName]: data}))
      })
      .catch(err=>console.log(err, 'end error'))

    

    navigation.navigate('Thankyoupage')
      })
    })

  }


  // useEffect(()=>{
  //   let questionSubscriber=()=>{}
  //   let contestStatusSubscriber=()=>{}
  //   let scoreBoardSubscriber=()=>{}


    
    
  //   const getData = async ()=>{
  //     let contestId = await AsyncStorage.getItem('contestId')
  //     if(contestId==null)
  //       navigation.navigate('Home')
        
  //     console.log(contestId)


  //     //TODO subscription code for firestore

  //     questionSubscriber = firebase.firestore()
  //     .collection('question')
  //     .doc(contestId)
  //     .onSnapshot(snapshot=>{
        
  //       console.log('question --->', snapshot.data())
  //       if(snapshot.data()){
  //         setQuestion(snapshot.data())
  //         setScoreBoard(null)
  //         setWaiting(false)
  //       }
  //     })

    
  //     contestStatusSubscriber = firebase.firestore()
  //     .collection('contest_status')
  //     .doc(contestId)
  //     .onSnapshot(snapshot=>{
  //       console.log('contest status --->' , snapshot.data())
  //       if(snapshot.data()){
  //         setWaiting(snapshot.data().waiting)

  //         if(snapshot.data().ended)
  //           setEnded(snapshot.data().ended)
  //       }
          
  //     })


  //     scoreBoardSubscriber = firebase.firestore()
  //     .collection('score_board')
  //     .doc(contestId)
  //     .onSnapshot(snapshot=>{
        
  //       console.log('score board --->', snapshot.data())
  //       if(snapshot.data()){
  //         setScoreBoard(snapshot.data())
  //         setWaiting(false)
  //       }
  //     })

    
  //   }

  //   getData()

  //   return ()=> {
  //     questionSubscriber();
  //     contestStatusSubscriber();
  //     scoreBoardSubscriber();  
  //   }
  // },[])


  useEffect(()=>{
    if(ended)
      navigation.navigate('Home')
  }, [ended])


  if(Questions[0]){

  return (
    <View style={styles.container}>
      {
        // !waiting && !question && !scoreBoard ? 
        //   <QuizStartPage/>
        // :
        //   waiting ?
        //     <GeneratingSocreBoard/>
        //   :
        //     scoreBoard ?
        //    <LeaderBoard/>
        //     :
        true && true && !true ? 
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
                            <Text style={{fontSize: 17}}>
                              Q {currentquestion+1}/10</Text>
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
                              {Questions[currentquestion].questionText}
                              </Text>
                          </View>
                      </View>
            
                      {Questions[currentquestion].mediaFileUrl? (
                        <View style={{flex: 1,alignContent:'center', 
                        justifyContent:'center', marginBottom: '5%'}}>
                          {Questions[currentquestion].questionType === 'IMAGE' ?(
                            
                              <Image source={{uri:Questions[currentquestion].mediaFileUrl}} 
                              style={styles.ques_image}/>
                            
                          ):(
                            <View style={{flex: 1, flexDirection: 'row', 
                        justifyContent:'center', marginBottom: '5%'}}>
                          {/* <video source={{uri:Questions[currentquestion].mediaFileUrl}} 
                          style={styles.ques_image}/> */}
                        </View>
                          )
      
                          }
                        </View>
                      ):(
                        <View></View>
                      )}
                      
            
                      <View style={{flex: 1, flexDirection: 'row', 
                      justifyContent: 'center'}}>
                      <View style={{flex: 1, flexDirection: 'row', 
                      justifyContent: 'space-around', maxWidth:'95%'}}>
                          <TouchableOpacity style={{...styles.option_box,...option1}} 
                          onPress= {()=>{answerbutton(1,Questions[currentquestion].questionId)}}>
                          <View >
                            <Text style={{fontSize: 17, textAlign:'center'}}>
                              {Questions[currentquestion].option1}
                              </Text>
                          </View>
                          </TouchableOpacity>
            
                          <TouchableOpacity style={{...styles.option_box,...option2}} 
                          onPress= {()=>{answerbutton(2,Questions[currentquestion].questionId)}}>
                          <View >
                            <Text style={{fontSize: 17, textAlign:'center'}}>
                            {Questions[currentquestion].option2}
                              </Text>
                          </View>
                          </TouchableOpacity>
            
                      </View>
                      </View>
                      
            
                      <View style={{flex: 1, flexDirection: 'row', 
                      justifyContent: 'center', marginBottom:'5%'}}>
                      <View style={{flex: 1, flexDirection: 'row', 
                      justifyContent: 'space-around', maxWidth:'95%'}}>
                        <TouchableOpacity style={{...styles.option_box,...option3}} 
                        onPress= {()=>{answerbutton(3,Questions[currentquestion].questionId)}}>
                          <View >
                            <Text style={{fontSize: 17, textAlign:'center'}}>
                            {Questions[currentquestion].option3}
            
                              </Text>
                          </View>
                          </TouchableOpacity>
            
                          <TouchableOpacity style={{...styles.option_box,...option4}} 
                          onPress= {()=>{answerbutton(4,Questions[currentquestion].questionId)}}>
                          <View >
                            <Text style={{fontSize: 17, textAlign:'center'}}>
                            {Questions[currentquestion].option4}
            
                              </Text>
                          </View>
                          </TouchableOpacity>
            
                      </View>
                      </View>
                          
                      <View style={{flex: 1, flexDirection: 'row', 
                      justifyContent: 'center'}}>
                      <View style={{flex: 1, flexDirection: 'row', 
                      justifyContent: 'space-between', maxWidth:'95%'}}>
                          
                          {currentquestion>0? (
                          <TouchableOpacity  style={styles.button_next} onPress= {()=>{prevbutton()}}>
                          <View>
                            <Text style={{fontSize: 17, textAlign:'center', color:'white'}}>Prev</Text>
                          </View>
                          </TouchableOpacity>
                          ):(
                            <View></View>
                          )}
                          {currentquestion!=10-1? (
                            <View>
                              {isanswered? (
                          <TouchableOpacity  style={styles.button_next} onPress= {()=>{nextbutton()}}>
                          <View>
                            <Text style={{fontSize: 17, textAlign:'center', color:'white'}}>Next</Text>
                          </View>
                          </TouchableOpacity>
                          ):(
                            <View>
                              {skipcount<3 ? (
                                <TouchableOpacity  style={styles.button_skip} onPress= {()=>{skipbutton()}}>
                                <View >
                                  <Text style={{fontSize: 17, textAlign:'center', color:'white'}}>Skip</Text>
                                </View>
                                </TouchableOpacity>
                              ):(
                                <View>
                                  <Text>Can't Skip More Questions</Text>
                                </View>
                              )}  
                            </View>
                          )}
                            </View>
                          ):(
                            <View>
                              {skipcount<1 && Questions[currentquestion].preAnswer ? (
                                <TouchableOpacity  style={styles.button_next} onPress= {()=>{quitbutton()}}>
                                <View >
                                  <Text style={{fontSize: 17, textAlign:'center', color:'white'}}>Submit</Text>
                                </View>
                                </TouchableOpacity>
                              ):(
                                <View>
                                  {/* <TouchableOpacity  style={styles.button_submit_disabled} disabled>
                                <View >
                                  <Text style={{fontSize: 17, textAlign:'center', color:'white'}}>Submit</Text>
                                </View>
                                </TouchableOpacity> */}
                                </View>
                              )}  
                            </View>
                            
                          )}
                          
                      </View>
                      </View>
            
            
                      
                      
                    </View>
                      
                  </View>
            <StatusBar style="auto" />
          </View>
        


      }
      {/* <Text>Come on, play the Quizzz!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
    }
    else
    {
        return(<View></View> )
    }
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
