import {Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Post from "../components/Post";
import MyButton from "../components/MyButton";
import {useNavigation} from "@react-navigation/native";
import { useSelector } from 'react-redux';
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";

const data = [
    {
        title: '',
        status: '',
        desc: '',
        photo: '',
        createdAt: new Date().toString()
    },
    {
        title: '',
        status: '',
        desc: '',
        photo: '',
        createdAt: new Date().toString()
    },
    {
        title: '',
        status: '',
        desc: '',
        photo: '',
        createdAt: new Date().toString()
    },
    {
        title: '',
        status: '',
        desc: '',
        photo: '',
        createdAt: new Date().toString()
    },
]

export default function HomeScreen() {
    const navigation = useNavigation()
    const { posts } = useSelector((state: RootState) => state.posts)
    const onPress = () => navigation.navigate('CreateNew')

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <FlatList
                data={posts}
                style={styles.container}
                renderItem={({item}) => <Post data={item}/>}
                keyExtractor={(item, index) => item.title + index}
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
