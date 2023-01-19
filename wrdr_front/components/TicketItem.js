import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

//이게 맞는지 모르겄다....
const TicketItem = ({id, subTitle, storyTitle}) => { //titleImage, id
  return (
    <View style={styles.container}>
      <Image source={require('../images/peterpan.jpg')} style={styles.image} />
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
    //flexDirection: 'column',
    marginRight: 28,
    alignSelf: 'center',
  },
  image: {
    width: 390,
    height: 390,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    //alignSelf: 'center',
    paddingBottom: 0,
  },
  titleCard: {
    width: 390,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingTop: 0,
    backgroundColor: '#ffffff',
    //alignSelf: 'center',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Jalnan',
    marginBottom: 10,
  },
  storyTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Jalnan',
  },
});

export default TicketItem;
