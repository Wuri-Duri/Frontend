//맨 위 title
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#FFE594', '#FFD07E', '#FEBA68']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

const Title = ({title}) => {
  return <GradientText style={styles.title}>{title}</GradientText>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 55,
    fontFamily: 'Jalnan',
    textAlign: 'center',
    margin: 50,
  },
});

export default Title;
