import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


const Home = () => {
    return (
        <SafeAreaView style={styles.wrapperWrapper}>
            <Text>Welcome to the site, you have already onboarded!</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create ({
    wrapperWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Home;