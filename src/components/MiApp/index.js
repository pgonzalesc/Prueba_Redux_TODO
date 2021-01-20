import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import { complete, saveTodo } from '../../redux/reducers/todos';
import Input from '../Imput';

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

const MiApp = ({ data, complete, submit }) => {
    const [value, setValue] = useState('');

    const handleChange = (val) => {
        setValue(val);
    }

    const handleSubmit = () => {
        submit(value)
        setValue('')
    }

    return (
        <View style={styles.container}>
          <Input onSubmit={handleSubmit} onChange={handleChange} value={value}/>
          <FlatList
            styles={styles.list}
            data={data}
            keyExtractor={x => String(x.id)}
            renderItem={({ item }) => 
                <ListItem 
                completed={item.completed}
                onPress={()=> complete(item.id)}  
                desc={item.desc}
                />
            }
          />
        </View>
    )
}

//Obtiene los datos del estado y le pasa al componente
const mapStateToProps = state => {
    return { data: state.todos };
}

const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(complete(id)),
    submit: (val) => dispatch(saveTodo(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(MiApp)