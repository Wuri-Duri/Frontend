import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const PlusButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../images/plusButton.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default PlusButton;
