import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();

const PresetMenu = () => {
  return (
    <View horizontal={true} style={styles.container}>
      <View style={styles.backButton}>
        <Icon name="left" size={50} color="#FFFFFF" />
      </View>
      <View style={styles.buttonContainer1}>
        <TouchableOpacity>
          <Image
            source={require('../../images/charMenu.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity>
          <Image
            source={require('../../images/bgMenu.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity>
          <Image
            source={require('../../images/lenMenu.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//정렬이 완전 지맘대루...
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#000000',
    opacity: 0.75,
    width: '100%',
    height: '17%',
  },
  backButton: {
    paddingLeft: 50,
  },
  buttonContainer1: {
    alignItems: 'center',
    paddingLeft: '20%',
    paddingBottom: 20,
  },
  buttonContainer2: {
    alignItems: 'center',
    paddingLeft: '13%',
    paddingBottom: 20,
  },
  image: {
    width: 70,
    height: 101,
    resizeMode: 'cover',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default PresetMenu;
