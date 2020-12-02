import React, {useState} from 'react'
import {View, Text,StyleSheet,TextInput, TouchableOpacity, } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const AddItem = ({addItem}) => {
  const [ text, setText] = useState('');
  
  const onChange = (textValue) => setText(textValue)

    return (
        
            <View>
              <TextInput 
              placeholder='Add Item ...' 
              style={styles.input} 
              onChangeText={onChange}
              />
              <TouchableOpacity 
              style={styles.btn}
              onPress={() => addItem(text)}
              >
                <Text 
                style={styles.btnText}
                >
                Add Item { }
                <FontAwesome name="shopping-cart" size={30} color="green" />
                </Text>
              </TouchableOpacity>
            </View>
        
    )
}
const styles = StyleSheet.create({
    input : {
       padding: 8,
       height: 60,
       fontSize: 18,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        fontSize: 23,
        color: 'darkslateblue',
        textAlign: 'center',

    }
    })

export default AddItem
