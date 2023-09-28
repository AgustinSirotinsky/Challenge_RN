//Expo
import { StatusBar } from 'expo-status-bar';

//React
import {StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function Information() {
    //consigue el platoid
    const params=useParams();

    const [plato, setPlato] = useState({})
    const getComida = async () => {
        try {
        const response = await fetch(`https://api.spoonacular.com/food/menuItems/${params.platoid}?apiKey=ca06425c7eef4240b7cc759f05e335cb`);
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
        <Link to={`/`} style={{ color: '#000000' }}><Button style={styles.botonHome}>Home</Button></Link>
        <Text style={styles.title}>{plato.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:50,
        fontSize:20,
    },
    titleImage: {

    },
    botonHome: {
        position: 'absolute',
        left: 0,
        up: 0
    },
    });
    
    
