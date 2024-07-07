import { StyleSheet, View } from 'react-native';
import React from 'react';
import SearchContainer from '@/components/SearchContainer'


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter player name');
  const [number, onChangeNumber] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('Search Players');

  return (
    <View 
      style={styles.container}
    >
      <SearchContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00397D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#0b5394',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },

  
});