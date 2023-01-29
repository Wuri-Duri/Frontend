import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PresetMenu from '../../components/Preset/PresetMenu';
import CircleBG from '../../components/Preset/CircleBG';

const SetBackgroundPage = () => {
  return (
    <View style={styles.container}>
      <PresetMenu />
      <Text style={styles.text}>우리의 이야기는 어디서 시작하나요?</Text>
      <CircleBG />
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
});

export default SetBackgroundPage;
