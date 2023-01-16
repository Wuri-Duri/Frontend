import React from 'react';
import {View, StyleSheet,} from 'react-native';
import Title from './components/Title';
import Ticket from './components/Ticket';

const MyLibraryPage = () => {
  return (
    <View Style={styles.container}>
      <Title title="우리두리"></Title>
      <Ticket
        subTitle="1번째 이야기"
        storyTitle="피터팬과 콩쥐야 좆됐어"></Ticket>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyLibraryPage;