import { Image, StyleSheet, TextInput, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';
import Card from '@/components/Card'


export default function SearchContainer() {
    const [text, onChangeText] = React.useState('Enter player name');
    const [placeholder, setPlaceholder] = React.useState('Search Players');

    const handleSearch = () => {
        const name = text.trim()
            if (name === '') {
                Alert.alert("Error", "Please enter a player name");
                return;
            }
        
        let url = `https://api-nba-v1.p.rapidapi.com/players?`;
        const names = name.split(' ');
        if (names.length === 1) {
            url += `name=${names[0]}`;
        } else if (names.length > 1) {
            url += `name=${names[1]}`;
            }
        fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd39c03c1famsh4f2d2b921bc2319p1d2ac1jsn3b63058a49a5',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            Alert.alert("Data fetched", JSON.stringify(data));
        })
        .catch(error => {
            console.error(error);
            Alert.alert("Error", "Failed to fetch data");
        });
    }

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
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={placeholder}
                    onFocus={() => setPlaceholder('')}
                    onBlur={() => setPlaceholder('Search Players')}
                />
            </Card>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',

      },
    button: {
        backgroundColor: '#0f872b',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    }
})