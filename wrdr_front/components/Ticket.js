import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

//이게 맞는지 모르겄다....
const Ticket = ({subTitle, storyTitle}) => {
  //titleImage, id
  return (
    <View style={styles.container}>
      <Image source={require('./images/peterpan.jpg')} style={styles.image} />
      <View style={styles.titleCard}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.storyTitle}>{storyTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: 390,
    height: 390,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 0,
  },
  titleCard: {
    width: 390,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 0,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Jalnan',
  },
  storyTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Jalnan',
  },
});

export default Ticket;
