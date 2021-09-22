import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import Theme from '../../styles/Theme';


export default function Search({navigation}) {

  const handleSearch = function(e){
    if(e.nativeEvent.key==="Enter")
      Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      {/* <Text onPress={()=>navigation.navigate('ContestDetails')}>click here</Text> */}
      <View style={styles.searchBarWrapper} >
        <View style={styles.searchIconWrapper}>
          <Ionicons name='search' style={styles.searchIcon} size={24} color={Theme.textSecondary} />
        </View>
        <TextInput style={styles.searchBar} returnKeyType='search' onKeyPress={handleSearch} />
      </View>
      
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
  }
});
