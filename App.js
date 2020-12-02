//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';



export default function App() {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Chicken'}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) => {
    if (!text) {
     Alert.alert('Error', 'The input field is empty, please enter an item.', [
      { text: "OK" }
      ]);
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
        <Header title={'Shopping List'} />
        <AddItem addItem={addItem} />
        <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} 
        />
        
    </View>
  );
}
//<StatusBar style='auto' />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  
});
