import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PresetMenu from './components/Preset/PresetMenu';
import AddChar from './components/Preset/AddChar';

const SetCharacterPage = () => {
  return (
    <View style={styles.container}>
      <PresetMenu />
      <Text style={styles.text}>이야기에 등장할 인물을 골라볼까요?</Text>
      <AddChar />
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

export default SetCharacterPage;
