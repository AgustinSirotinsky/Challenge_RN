import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [platos, setPlatos] = useState([])
  const getComida = async () => {
    try {
      const response = await fetch('https://api.spoonacular.com/food/menuItems/1?apiKey=389b8091e46e4627aba19a5007f6ad34');
      const json =await response.json();
      setPlatos(json)
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
      {console.log(platos)}
      <Text>{platos.title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
