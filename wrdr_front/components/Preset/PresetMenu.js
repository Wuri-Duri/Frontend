import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
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
          <Text style={styles.text}>인물</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity>
          <Image
            source={require('../../images/bgMenu.png')}
            style={styles.image}
          />
          <Text style={styles.text}>배경</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../images/lenMenu.png')}
            style={styles.image}
          />
          <Text style={styles.text}>길이</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//정렬이 완전 지맘대루...이상한거 다 뜯어고쳐도 정말 갠찮아용,,
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
    paddingLeft: 20,
  },
  buttonContainer1: {
    alignItems: 'center',
    paddingLeft: '20%',
    paddingBottom: 23,
    paddingTop: 23,
  },
  buttonContainer2: {
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: 23,
    paddingTop: 23,
  },
  image: {
    width: 90,
    height: 90,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Jalnan',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
});

export default PresetMenu;
