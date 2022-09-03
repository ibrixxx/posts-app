import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function MyButton({title, onPress}) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
        position: 'absolute',
        bottom: 33
    }
});
