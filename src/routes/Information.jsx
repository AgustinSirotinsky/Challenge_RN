//Expo
import { StatusBar } from 'expo-status-bar';

//React
import {StyleSheet, Text, View, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Information() {
    //consigue el platoid
    const params=useParams();

    const [plato, setPlato] = useState({})
    const getComida = async () => {
        try {
        const response = await fetch(`https://api.spoonacular.com/food/menuItems/${params.platoid}?apiKey=389b8091e46e4627aba19a5007f6ad34`);
        const json =await response.json();
            console.log(json.images[0])
            setPlato(json)
        }
        catch (error) {
        console.error(error);
        }
    }
    
    useEffect(() => {
        getComida();
    }, []);


    return (
        <View style={styles.container}>
        <Text style={styles.title}>{plato.title}</Text>
        <Image source={{uri: plato.images[0]}} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        textAlign: 'center',
        fontSize:16,
    },
    titleImage: {

    },
    });
    