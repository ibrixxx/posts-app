import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Post() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'}}
                    style={{width: 128, height: 128, borderRadius: 14}}
                />
                <View style={styles.info}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 7}}>Title</Text>
                    <View style={{flexDirection: 'row', marginTop: 7}}>
                        <Text>Created at: </Text>
                        <Text>04.05.3123 09pm</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={{color: 'red', fontSize: 16}}>Draft</Text>
                    </View>
                </View>
            </View>
            <View style={styles.caption}>
                <Text numberOfLines={2}>
                    Laldladlaldlaasddasdoapspasadasfaofisfjsdofjdsfpsofjsofjsdoifjs
                    fasofisjfiosdjfisdojfiodsjfdsoijfidsfdsfdsjifsdjfiodsjfods
                    sfjiosdjfiosdjfodsjfdosjfodsjfodsfjodsfjodsfjodsjfodsjfdsfsdf
                    fdsfijosdjfodsjfodsjfodsjfodsjfoidsjfoijfdsojsfojisjfodsjfdso
                    dsjifosdjfiodsjfdsofjdsoifjdsfjoidsf
                    sdjfosdjf
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 220,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 18
    },
    head: {
        flexDirection: 'row',
        height: '75%',
        paddingTop: 16,
        alignItems: 'flex-start',
    },
    caption: {
        height: '25%',
        width: '100%',
        marginTop: 16
    },
    button: {
        borderRadius: 14,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 6,
        width: '40%'
    },
    info: {
        marginLeft: 16
    }
});
