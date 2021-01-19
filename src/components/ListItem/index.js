import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ desc, onPress, completed }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {completed 
              ? <Text style={[styles.text, styles.strike]}>{desc}</Text>
              : <Text style={styles.text}>{desc}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize: 18,
    },
    strike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }
});

export default ListItem;