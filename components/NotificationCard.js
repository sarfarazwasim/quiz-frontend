import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from '../styles/Theme';


export default function NotificationCard({ text }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2}>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Theme.textPrimaryLight,
    // alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: Theme.textSecondary,
    justifyContent: 'center',
    minWidth:'100%'
  },
});
