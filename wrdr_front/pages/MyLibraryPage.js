import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title';

const MyLibraryPage = () => {
  return (
    <View Style={styles.container}>
      <Title title="우리두리"></Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyLibraryPage;
