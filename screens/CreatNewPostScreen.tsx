import {Image, StyleSheet, Text, View} from 'react-native';
import DataInput from "../components/DataInput";
import PhotoInput from "../components/PhotoInput";
import MyButton from "../components/MyButton";
import {useDispatch, useSelector} from 'react-redux';
import {setPost} from "../redux/postsSlice";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {storage} from "../App";


export default function CreatNewPostScreen() {
    const dispatch = useDispatch();
    const { posts } = useSelector((state: RootState) => state.posts)
    const navigation = useNavigation()
    const [data, setData] = useState({
        title: '',
        status: 0,
        desc: '',
    })
    const [image, setImage] = useState('');

    const storePost = () => {
        let arr = posts.slice()
        arr.push({
            ...data,
            photo: image,
            createdAt: new Date().toString()
        })
        let arrToStore = []
        for(const e of arr)
            arrToStore.push(JSON.stringify(e))
        storage.set('posts', arrToStore.toString())
    }

    const onPress = () => {
        storePost()
        dispatch(setPost({
            ...data,
            photo: image,
            createdAt: new Date().toString()
        }));
        navigation.goBack()
    };

    return (
        <View style={styles.container}>
            <DataInput data={data} setData={setData} />
            <PhotoInput image={image} setImage={setImage}/>
            <MyButton title={'Submit'} onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        height: '100%'
    },
});
