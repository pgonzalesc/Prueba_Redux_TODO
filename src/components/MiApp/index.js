import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem';

const data = [
    {id: 1, desc: 'texto prueba 1', completed: false},
    {id: 2, desc: 'texto prueba 2', completed: false}
]

const MiApp = () => {
    return (
        <View style={styles.container}>
          <FlatList
            styles={styles.list}
            data={data}
            keyExtractor={x => String(x.id)}
            renderItem={({ item }) => 
                <ListItem 
                onPress={()=>{}}  
                desc={item.desc}
                />
            }
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
});

export default MiApp;