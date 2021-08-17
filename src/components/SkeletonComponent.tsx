import React, { useEffect } from 'react'
import { StyleSheet, View, Dimensions, Animated, Easing } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window')
const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const SkeletonComponent = (props: any) => {
    const animatedValue = new Animated.Value(0);
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width],
    })

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000,
                // @ts-ignore
                easing: Easing.linear.inOut,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <AnimatedLG
                colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0',]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    transform: [{ translateX }],
                }}
            />
        </View>
    )
}

export default SkeletonComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a0a0a0',
        borderColor: '#b0b0b0',
        height: 150,
        width
    }
})
