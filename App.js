//Expo
import { StatusBar } from 'expo-status-bar';

//React
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function App() {
  //Delay para que la api llegue a tiempo !!
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [platos, setPlatos] = useState([])
  const getComida = async () => {
    try {
      const response = await fetch('https://api.spoonacular.com/food/menuItems/123434?apiKey=8e1d9d5270a7426dba8626b384a2d28c');
      const json =await response.json();
      setPlatos(json)
      // console.log(platos)
    }
    catch (error) {
      console.error(error);
    }
    finally {
    }
  }
  
  useEffect(() => {
    getComida();
    makeRequest();
  }, []);

  return (
    <View style={styles.container}>
    {console.log(platos.generatedText)}
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={platos.image} />
      <Card.Body>
        <Card.Title>{platos.title}</Card.Title>
        <Card.Text>
          {platos.generatedText}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
