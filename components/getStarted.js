import * as React from 'react';
import { Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

const getStarted = ({ navigation }) => {
    return (
        <ImageBackground style={styles.image} blurRadius={4} source={require('../assets/flower.jpg')}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Manage</Text>
                <Text style={styles.desc}>
                    We'll  help you nurture and
                    maintain your garden with
                    the most reliable advice
                </Text>
                <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ textAlign: 'center'}}>Get started</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: 300,
        marginLeft: 50
    },
    header:{
        fontSize: 35,
        fontWeight: '700',
        color: 'white',
        paddingBottom: 25
    },
    desc: {
        fontSize: 21,
        color: 'white',
        paddingBottom: 25
    },
    getStartedBtn: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        textAlign: 'center'
    }
})
export default getStarted
