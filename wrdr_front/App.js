//실제 화면에 어떻게 보이는지 보려고 app.js에 옮겨놓은거에용~~

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PresetMenu from './components/Preset/PresetMenu';
import CircleBG from './components/Preset/CircleBG';

const App = () => {
  return (
    <View style={styles.container}>
      <PresetMenu />
      <Text style={styles.text}>우리의 이야기는 어디서 시작하나요?</Text>
      <CircleBG style={styles.circle1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#151B3B',
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    color: '#FFFFFF',
    fontFamily: 'Jalnan',
    paddingTop: 30,
    paddingBottom: 30,
  },
  circle1: {
    alignContent: 'center',
  },
});

export default App;
