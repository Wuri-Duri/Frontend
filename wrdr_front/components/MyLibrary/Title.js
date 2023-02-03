//맨 위 title
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={['#FFE594', '#FFD07E', '#FEBA68']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

const Title = () => {
  return <GradientText style={styles.title}>우리두리</GradientText>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontFamily: 'Jalnan',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
});

export default Title;
