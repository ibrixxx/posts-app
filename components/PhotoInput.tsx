import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";

export default function PhotoInput() {
    const [image, setImage] = useState('');

    const openPicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const removeImage = () => {
        setImage('')
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16, marginBottom: 18}}>Photo</Text>
            {image?
                <View style={styles.image}>
                    <ImageBackground source={{uri: image}} style={styles.image}>
                        <TouchableOpacity style={styles.close} onPress={removeImage}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>X</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                :
                <TouchableOpacity style={styles.addImage} onPress={openPicker}>
                    <Ionicons name="add-circle-outline" size={24} color="gray"/>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 12,
        width: '100%',
        padding: 16,
    },
    addImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 12,
        width: 80,
        height: 80
    },
    image: {
        borderRadius: 12,
        width: 80,
        height: 80,
        alignItems: 'flex-end',
        overflow: 'hidden'
    },
    close: {
        backgroundColor: 'dodgerblue',
        width: 25,
        height: 25,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
