import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlusButton from './PlusButton';

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
        <PlusButton style={styles.button} />
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
    width: 360,
    height: 510,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 28,
    paddingRight: 28,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 59,
    height: 59,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default TicketAdd;
