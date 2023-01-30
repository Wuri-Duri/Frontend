import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PresetMenu from '../../components/Preset/PresetMenu';
import BookLen from '../../components/Preset/BookLen';

const SetLengthPage = () => {
  return (
    <View style={styles.container}>
      <PresetMenu />
      <Text style={styles.text}>이 이야기의 길이는?</Text>
      <BookLen />
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

export default SetLengthPage;
