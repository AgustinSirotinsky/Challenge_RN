//Expo
import { StatusBar } from 'expo-status-bar';

//React
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  //Delay para que la api llegue a tiempo !!
const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const [platos, setPlatos] = useState([])
const getComida = async () => {
    try {
    const response = await fetch('https://api.spoonacular.com/food/menuItems/search?apiKey=389b8091e46e4627aba19a5007f6ad34&query=sushi');
    const json =await response.json();
        setPlatos(json.menuItems)
        console.log(platos)
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
    {platos.map((platos) => (
        <Link to={`/information/${platos.id}`} style={{ color: '#000000' }}>
        <Card key={platos.id} style={{ width: '45%' }}>
        <Card.Img variant="top" src={platos.image} />
        <Card.Body>
            <Card.Title>{platos.title}</Card.Title>
            <Card.Text>{platos.generatedText}</Card.Text>
        </Card.Body>
        </Card>
        </Link>
    ))}
    </View>
);
}

const styles = StyleSheet.create({
container: {
    
},
});
