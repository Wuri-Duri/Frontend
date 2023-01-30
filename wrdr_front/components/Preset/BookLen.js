import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

//presetmenu에서 선택시 해당 아이콘 선명하게 바꾸기
//배경 선택시 => 길이선택 버튼 투명도 바뀜, check button 이미지 변경
const BookLen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <View style={styles.book1}>
          <Image
            source={require('../../assets/SetLength/len1.png')}
            style={styles.image1}
          />
        </View>
        <View style={styles.book2}>
          <Image
            source={require('../../assets/SetLength/len2.png')}
            style={styles.image2}
          />
        </View>
        <View style={styles.book3}>
          <Image
            source={require('../../assets/SetLength/len3.png')}
            style={styles.image3}
          />
        </View>
      </View>
      <Image
        source={require('../../assets/checkButton.png')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  book1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    paddingRight: 20,
    paddingLeft: 20,
  },
  book2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
  },
  book3: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    paddingRight: 20,
    paddingLeft: 20,
  },
  image1: {
    width: 300,
    height: 155,
    resizeMode: 'cover',
  },
  image2: {
    width: 300,
    height: 225,
    resizeMode: 'cover',
  },
  image3: {
    width: 300,
    height: 320,
    resizeMode: 'cover',
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

export default BookLen;
