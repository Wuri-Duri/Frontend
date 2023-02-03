import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from '../common/MainButton';

const LastTicketForAdd = () => {
  // TouchableOpacity 클릭 시 동화 추가 뷰로 넘어가게 하는 작업 추가 필요

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient colors={['#418DF1', '#418DF100']} style={styles.linearGradient}>
          <View style={styles.button}>
            <MainButton size={50} />
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
    marginLeft: 25,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 28,
    paddingRight: 28,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default LastTicketForAdd;
