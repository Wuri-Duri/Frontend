import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TicketItem from './TicketItem';

const TicketList = ({tickets}) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.listContainer}>
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} {...ticket} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TicketList;
