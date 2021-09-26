import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import Leader from '../assets/leader.json'
import { StyleSheet, Text, View,Image, TouchableOpacity, Button, Pressable, ImageBackground, TextInput, ScrollView } from 'react-native';
export default function App({scoreBoard}) {

  useEffect(()=>{
    // console.log('Async contest')
    // console.log(AsyncStorage.getItem('selectedContest'))
    console.log('myscore', scoreBoard.scores[0])
    // setData(AsyncStorage.getItem('selectedContest'))
    // storeStringData('contestId', 'contest2')
    // console.log('contest', mydata)
  },[])



  let [isactive, setActive] = useState(false);
  let [currentquestion, setCurrent] = useState(0);
  let [starttime, setstarttime] = useState("Monday 8 PM");
  let [endtime, setendtime] = useState("Monday 10 PM");
  let [duration, setDuration] = useState("15 Mins");
  let [clickedanswer, setClicked] = useState(-1);
  let answerstyle = {backgroundColor:'gray', color:'white'};

  // let [timeleft, setleft] = useState(30);

  // let totalcorrect = 0
  let totalquestions = 7
  // var timeleft = 30 ;
  // setInterval(function(){
  //   setTimeleft (timeleft--);
  // }, 1000);

  const subscribrbutton = () =>
  {
    
  }

  const joinbutton = () =>
  {
    
  }

  const prevbutton = () =>
  {
    // alert('my ' + clickedanswer + ' correct ' + Questions[currentquestion].correctIndex)
    // Questions[currentquestion].isskipped=false

    if(currentquestion <= Questions.length)
    {
      setCurrent(currentquestion-1)
      // alert(currentquestion)
    }
    
    if(Questions[currentquestion-1].clicked)
    {
      setAnswered(true)  
      if(Questions[currentquestion-1].clicked === 1)
        {
          setastyle1(answerstyle)
          setastyle2({})
          setastyle3({})
          setastyle4({})
        }
        else if(Questions[currentquestion-1].clicked === 2)
        {
          setastyle2(answerstyle)
          setastyle1({})
          setastyle3({})
          setastyle4({})
        }
        else if(Questions[currentquestion-1].clicked === 3)
        {
          setastyle3(answerstyle)
          setastyle2({})
          setastyle1({})
          setastyle4({})
        }
        else if(Questions[currentquestion-1].clicked === 4)
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

  const submitbutton = () =>
  {

      alert('Score: '+ totalcorrect+' / '+totalquestions)
    setCorrect(-1)
    setAnswered(false)
    setastyle1({})
    setastyle2({})
    setastyle3({})
    setastyle4({})


  }
  
  return (
    <ScrollView>

    <StatusBar backgroundColor="transparent" style="light"  />
      <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/quiz_back.jpg')}
                style={styles.back_image} /> */}
      <View style={styles.middle_body}>
        <View style={{borderColor: 'black', borderWidth: 1, borderRadius: 20}}>
          

          <View style={styles.top_heading}>
          <Text style={styles.heading} >Leaderboard</Text>
          <View style={styles.leader_table_head} >
            <View style={styles.rank_col}>
              <Text style={{fontSize:20, textAlign:'center',color:'#00b6bd'}} >
                Rank
              </Text>
            </View>

            <View style={styles.name_col}>
              <Text style={{fontSize:20, textAlign:'center',color:'#00b6bd'}} >
                Name
              </Text>
            </View>

            <View style={styles.points_col}>
              <Text style={{fontSize:20, textAlign:'center',color:'#00b6bd'}} >
                Points
              </Text>
            </View>
          </View>

          <View style={{borderColor: 'black', borderWidth: 1}}> 
          </View>
          </View>

          {scoreBoard.scores.map((items, index) => (
            
            <View style={styles.leader_table} key={index} >
            <View style={styles.rank_col}>
              <Text style={{fontSize:20, textAlign:'center', paddingLeft:6}} >
                { index == 0 ? (
                  <Text>🥇</Text>
                ):(<View></View>)

                }
                { index == 1 ? (
                  <Text>🥈</Text>
                ):(<View></View>)

                }
                { index == 2 ? (
                  <Text>🥉</Text>
                ):(<View></View>)

                }
                 { index > 2 ? (
                  <Text> {items.rank}</Text>
                ):(<View></View>)

                }
              </Text> 
            </View>

            <View style={styles.name_col}>
              <Text style={{fontSize:20, textAlign:'center'}} >
                {items.userId}
              </Text>
            </View>

            <View style={styles.points_col}>
              <Text style={{fontSize:20, textAlign:'center',paddingRight:0}} >
              {items.score}⭐
              </Text>
            </View>
          </View>
        
          ))}
          
          
        {/* <View style={styles.inside_body}>
        </View> */}
        </View>
      </View>
      {/* <View style={{padding: 20}}></View> */}
    </View>  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#ececec',
  },
  back_image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
    position: 'absolute',
    opacity:0
  },
  middle_body: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 60,
    paddingBottom: 30
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
    minWidth: '90%',
    borderRadius: 20,
    padding: '2%',
    fontSize: 400,
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
  heading: {
    fontSize:30,
    textAlign: 'center',
    color:'#00b6bd'
    // color:'black',
  },
  top_heading: {
    backgroundColor: '#273238',
    // backgroundColor: '#00b6bd',
    color:'#00b6bd',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    // opacity:0.3

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
  leader_table: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    minHeight: 60,
    minWidth: '70%',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    alignItems: 'center'
  },
  leader_table_head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    minWidth: '70%',
    minHeight: 70,
    top: 0,
    alignItems:'flex-end',
    paddingBottom: 5
  },
  rank_col: {
    // borderWidth: 1,
    // borderColor: 'black'
    width: '15%'
  },
  name_col: {
    // borderWidth: 1,
    // borderColor: 'black',
    width:'55%'
  },
  points_col: {
    // borderWidth: 1,
    // borderColor: 'black',
    width:'25%'
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
