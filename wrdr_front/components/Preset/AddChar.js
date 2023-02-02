import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();

const AddChar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addBox}>
        <View style={styles.plusButton}>
          <Icon name="plus" size={49} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  addBox: {
    width: 320,
    height: 407,
    resizeMode: 'cover',
    backgroundColor: '#000000',
    opacity: 0.5,
    marginBottom: 30,
    justifyContent: 'center',
  },
  plusButton: {
    alignSelf: 'center',
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

export default AddChar;
