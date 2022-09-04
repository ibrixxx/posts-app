import {Image, StyleSheet, Text, View} from 'react-native';
import moment from "moment";

export default function Post({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image
                    source={{uri: data.photo}}
                    style={{width: 128, height: 128, borderRadius: 14}}
                />
                <View style={styles.info}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 7}}>
                        {data.title}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 7}}>
                        <Text style={{fontSize: 12, color: 'gray'}}>Created at: </Text>
                        <Text style={{fontSize: 12}}>{moment(data.createdAt).format('MM/DD/YY hh:mm a')}</Text>
                    </View>
                    {data.status?
                        <Text style={[styles.button, {color: '#D91616', fontSize: 16, backgroundColor: '#D916161A', opacity: 0.9}]}>Draft</Text>
                        :
                        <Text style={[styles.button, {color: '#10C137', fontSize: 16, backgroundColor: '#10C1371A', opacity: 0.9}]}>Published</Text>
                    }
                </View>
            </View>
            <View style={styles.caption}>
                <Text numberOfLines={2}>
                    {data.desc}
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
        paddingBottom: 18,
        width: '100%'
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
        textAlign: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 6,
    },
    info: {
        marginLeft: 16,
        alignItems: 'flex-start'
    }
});
