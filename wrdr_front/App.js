<<<<<<< HEAD
//실제 화면에 어떻게 보이는지 보려고 app.js에 옮겨놓은거에용~~

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PresetMenu from './components/Preset/PresetMenu';
import AddChar from './components/Preset/AddChar';

const App = () => {
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

=======
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from './assets/exampleBG.png';
import MyLibraryPage from './pages/MyLibraryPage';
import BottomBar from './components/common/BottomBar';

const MainContainer = styled.View`
  position: relative;
  flex: 1;
`

const MainBackgroundImg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

const App = ({props}) => {
  return (
    <MainContainer>
      <MainBackgroundImg source={BackgroundImage} resizeMode="cover">
        <MyLibraryPage/>
        <BottomBar/>
      </MainBackgroundImg>
    </MainContainer>
  );
};

>>>>>>> 9db68d783d5b36bb38aaf97918ec313e45e32622
export default App;
