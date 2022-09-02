import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from "react";

export default function DataInput() {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'Title'}
                style={styles.input}
            />
            <Picker
                style={styles.input}
                selectedValue={''}
                onValueChange={val => {
                    console.log(val);
                }}
                placeholder={'Status'}
            >
                <Picker.Item label="Published" value="Published" />
                <Picker.Item label="Draft" value="Draft" />
            </Picker>
            <TextInput
                placeholder={'Description'}
                style={[styles.input, {height: 116, textAlignVertical: 'top', paddingTop: 16}]}
                numberOfLines={5}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        padding: 16,
        marginTop: 16
    },
    input: {
        backgroundColor: 'whitesmoke',
        height: 58,
        borderRadius: 6,
        marginTop: 8,
        width: '100%',
        color: 'gray',
        paddingLeft: 10
    }
});
