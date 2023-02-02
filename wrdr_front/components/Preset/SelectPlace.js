import React, { useState } from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

//presetmenu에서 선택시 해당 아이콘 선명하게 바꾸기
//배경 선택시 => 배경circle 버튼 투명도 바뀜, nextbutton 이미지 변경
const SelectPlace = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  circleContainer1: {
    flex: 1,
    alignContent: 'center',
    marginTop: 30,
    marginLeft: 60,
    marginRight: 30,
  },
  circleContainer3: {
    flex: 1,
    alignContent: 'center',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  circleContainer2: {
    flex: 1,
    alignContent: 'center',
    marginTop: 120,
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    width: 290,
    height: 290,
    resizeMode: 'cover',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 95,
    height: 95,
    resizeMode: 'cover',
    marginBottom: 30,
  },
});

export default SelectPlace;
