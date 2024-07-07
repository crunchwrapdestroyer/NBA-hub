import { Image, StyleSheet, TextInput, Button, ScrollView, View } from 'react-native';
import React from 'react';
import Card from '@/components/Card'


export default function SearchContainer () {
    const [text, onChangeText] = React.useState('Enter player name');
    const [number, onChangeNumber] = React.useState('');
    const [placeholder, setPlaceholder] = React.useState('Search Players');

    return (
    
        <View>    
            <Image 
                style={styles.logo}
                source={require('@/assets/images/logo.png')}
            >
            </Image>
            <Card>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder={placeholder}
                    keyboardType="numeric"
                    onFocus={() => setPlaceholder('')}
                    onBlur={() => setPlaceholder('Search Players')}
                />
            </Card>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go"
                    color="#0f872b"
                />
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#0b5394',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
      },
    input: {
        fontSize: 20,
        height: 30,
        borderBottomWidth: 0,
      },
    logo: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
      },
    buttonContainer: {
        marginTop: 10,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',

      },
    button: {
        marginTop: 10,
        width: 'auto',

      },
    })
