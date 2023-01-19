import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title';
import TicketItem from './components/TicketItem';
import TicketAdd from './components/TicketAdd';
import TicketList from './components/TicketList';
import PlusButton from './components/PlusButton';

const MyLibraryPage = () => {
  //tickets : {id:Number, subTitle: string, storyTitle: string}
  const [tickets, setTickets] = useState([]);

  const addTicket = () => {
    setTickets([
      ...tickets,
      {id: Math.random().toString(), subTitle: text, storyTitle: text},
    ]);
  };

  return (
    <View style={styles.container}>
      <Title title="우리두리"></Title>
      <View
        horizontal={true}
        showsHorizontalScrollIndication={true}
        style={styles.ticketContainer}>
        <TicketList tickets={tickets} />
        <TicketItem
          subTitle="1번째 이야기"
          storyTitle="피터팬과 콩쥐야 좆됐어"></TicketItem>
        <TicketAdd onAddTicket={addTicket} />
      </View>
      <PlusButton style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151B3B',
  },
  ticketContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  button: {
    width: 114,
    height: 114,
  },
});

export default MyLibraryPage;
