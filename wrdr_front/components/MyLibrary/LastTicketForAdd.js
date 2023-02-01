import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlusButton from '../common/PlusButton';

const LastTicketForAdd = () => {
  // TouchableOpacity 클릭 시 동화 추가 뷰로 넘어가게 하는 작업 추가 필요

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient colors={['#418DF1', '#418DF100']} style={styles.linearGradient}>
          <View style={styles.button}>
            <PlusButton />
          </View>
          <Text style={styles.text}>새로운 이야기 행성으로 {'\n'} 떠나볼까요?</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: '100%',
    justifyContent: 'flex-end',
  },
  linearGradient: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 28,
    paddingRight: 28,
  },
  button: {
    width: 59,
    height: 59,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default LastTicketForAdd;
