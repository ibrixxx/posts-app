import {Image, StyleSheet, Text, View} from 'react-native';
import DataInput from "../components/DataInput";
import PhotoInput from "../components/PhotoInput";
import MyButton from "../components/MyButton";
import { useDispatch } from 'react-redux';
import {setPost} from "../redux/postsSlice";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";


export default function CreatNewPostScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [data, setData] = useState({
        title: '',
        status: 0,
        desc: '',
    })
    const [image, setImage] = useState('');


    const onPress = () => {
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
