import React from 'react';
import { StatusBar, Text, View, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';
import {LinearGradient} from 'expo-linear-gradient';

import {
    useFonts,
    OpenSans_400Regular as OpenSansRegular,
    OpenSans_600SemiBold as OpenSansSemiBold,
    OpenSans_700Bold as OpenSansBold,
} from '@expo-google-fonts/open-sans';

const data = [
    {
        title: 'Save time by tracking your studies',
        text: 'Schedule your classes, quizzes, assignments, and more',
        image: require('../assets/images/read.png'),
        bg: '#59b2ab',
    },
    {
        title: 'Stay on top of your education',
        text: 'Reduce your stress, increase your productivity',
        image: require('../assets/images/onTop.png'),
        bg: '#febe29',
    },
    {
        title: 'Spend more time doing the things you love',
        text: 'Get started within five minutes',
        image: require('../assets/images/play.png'),
        bg: '#22bcb5',
    },
];


const Onboard = (props) => {

    let [fontsLoaded] = useFonts({
        OpenSansRegular,
        OpenSansSemiBold,
        OpenSansBold,
    });

    if(!fontsLoaded) {
        return null;
    };

    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image}/>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        )
    } 

    const keyExtractor = (item) => item.title;

    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
            <Text style={styles.rightText}>Next</Text>
        </View>
        )
    };
    const renderPrevButton = () => {
        return (
        <View style={styles.leftTextWrapper}>
            <Text style={styles.leftText}>Previous</Text>
        </View>
        )
    };
    const renderDoneButton = () => {
        return (
        <LinearGradient 
            start={{x: 1, y: 0}} end={{x: 0, y: 0}}
            colors={[colors.darkBlue, colors.lightBlue]} 
            style={styles.rightDoneWrapper}
            >
            <Text style={styles.rightText}>
                Done
            </Text>
        </LinearGradient>
    )
};

    const handleDone = () => {
        props.handleDone();
    }

    return (
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={data}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            renderDoneButton={renderDoneButton}
            showPrevButton
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            onDone={handleDone}
        />
    </View>
    );
}


    const styles = StyleSheet.create ({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    image: {
        marginVertical: 50,
    },
    title: {
        fontSize: 24,
        fontFamily: 'OpenSansBold',
        color: colors.black,
        textAlign: 'center',
        marginHorizontal: 40,
    },
    text: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 14,
        color: colors.grey,
        textAlign: 'center',
        marginHorizontal: 40,
        marginTop: 20,
    },
    rightTextWrapper:{
        width: 40,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    rightText:{
        color: colors.blue,
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold',
    },
    leftTextWrapper: {
        width: 60,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    leftText: {
        color: colors.blue,
        fontSize: 14,
        fontFamily: 'OpenSansSemiBold',
    },
    dotStyle: {
        backgroundColor: colors.lightBlue,
    },
    activeDotStyle: {
        backgroundColor: colors.darkBlue,
    },
    rightDoneWrapper: {
        marginRight: -20,
        paddingRight: 20,
        height: 40, 
        width: 127,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

    }
});


export default Onboard;