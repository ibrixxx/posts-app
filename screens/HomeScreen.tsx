import {Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Post from "../components/Post";
import MyButton from "../components/MyButton";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {useEffect} from "react";
import {setInitialPost} from "../redux/postsSlice";
import {storage} from "../App";

export default function HomeScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const { posts } = useSelector((state: RootState) => state.posts)
    const onPress = () => navigation.navigate('CreateNew')

    useEffect(() => {
        (async () => {
            if (posts.length)
                return
            const storedPosts = await storage.getString('posts')
            if(!storedPosts)
                return
            console.log('aaa ', storedPosts)
            const storedPostsArr = storedPosts?.split(',{')
            let arr = []
            for (const e of storedPostsArr) {
                if(e[0] !== '{')
                    arr.push(JSON.parse('{'+e));
                else
                    arr.push(JSON.parse(e));
            }
            console.log('fff ', arr)
            await dispatch(setInitialPost(arr));
        })()
    }, [])

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
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
        paddingBottom: 12,
        width: '100%'
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
