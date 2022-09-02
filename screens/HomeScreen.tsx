import {Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Post from "../components/Post";
import MyButton from "../components/MyButton";
import {useNavigation} from "@react-navigation/native";
import { useSelector } from 'react-redux';

export default function HomeScreen() {
    const navigation = useNavigation()
    const onPress = () => navigation.navigate('CreateNew')

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                data={[1,2,3,4,5,6,7]}
                style={styles.container}
                renderItem={() => <Post />}
            />
            <MyButton title={'New Post'} onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        paddingBottom: 12
    },
    button: {
        width: '90%',
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
        position: 'absolute',
        bottom: 80
    }
});
