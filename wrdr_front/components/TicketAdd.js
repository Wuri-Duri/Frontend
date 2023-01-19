import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TicketAdd = ({onAddTicket}) => {
  const [newTicketItem, setNewTicketItem] = useState('');

  const ticketInputHandler = newTicket => {
    setNewTicketItem(newTicket);
  };

  const addTicketHandler = () => {
    onAddTicket(newTicketItem);
    setNewTicketItem('');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#418DF1', '#418DF100']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../images/plusButton.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>
          새로운 이야기 행성으로 {'\n'} 떠나볼까요?
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    width: 390,
    height: 550,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 28,
    paddingRight: 28,
    //alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default TicketAdd;
