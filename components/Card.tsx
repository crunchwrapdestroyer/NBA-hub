import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Card;