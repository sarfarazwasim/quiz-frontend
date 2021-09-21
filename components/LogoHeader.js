import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Theme from '../styles/Theme';


export default function LogoHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Quizzz</Text>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: StatusBar.currentHeight+10,
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: Theme.bg_level1,
    elevation: 2
  },
  headerText:{
    color: Theme.primary,
    fontWeight: 'bold',
    fontSize: 22
  }
});
