import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function DataInput({data, setData}) {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'Title'}
                style={styles.input}
                onChangeText={val => setData({...data, title: val})}
            />
            <Picker
                style={styles.input}
                selectedValue={data.status}
                onValueChange={val => {
                    setData({...data, status: val})
                }}
                placeholder={'Status'}
            >
                <Picker.Item label="Published" value={0} />
                <Picker.Item label="Draft" value={1} />
            </Picker>
            <TextInput
                placeholder={'Description'}
                style={[styles.input, {height: 116, textAlignVertical: 'top', paddingTop: 16}]}
                numberOfLines={5}
                onChangeText={val => setData({...data, desc: val})}
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
