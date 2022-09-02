import {Image, StyleSheet, Text, View} from 'react-native';
import DataInput from "../components/DataInput";
import PhotoInput from "../components/PhotoInput";
import MyButton from "../components/MyButton";
import { useDispatch } from 'react-redux';
import {setPost} from "../redux/postsSlice";
import {useState} from "react";

interface PostData {
    title: string,
    status: string,
    desc: string,
    photo: string
}

export default function CreatNewPostScreen() {
    const dispatch = useDispatch();
    const [data, setData] = useState({})

    const onPress = () => {
        dispatch(setPost(data));
    };

    return (
        <View style={styles.container}>
            <DataInput />
            <PhotoInput />
            <MyButton title={'Submit'} onPress={() => console.log('a')} />
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
