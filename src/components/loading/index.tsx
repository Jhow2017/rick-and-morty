import React, { useRef, useEffect } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';

// components
import LayoutPublic from '@components/layout/public';

// images
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';

const Loading = () => {
    const scaleValue = useRef(new Animated.Value(1)).current;
    const translateYValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const pulseAnimation = () => {
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 1.2,
                    duration: 1500,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
            ]).start(() => pulseAnimation());
        };

        const expandAnimation = Animated.timing(scaleValue, {
            toValue: 10,
            duration: 5000,
            easing: Easing.ease,
            useNativeDriver: true,
        });

        const translateYAnimation = Animated.timing(translateYValue, {
            toValue: -Dimensions.get('window').height * 5,
            duration: 5000,
            easing: Easing.ease,
            useNativeDriver: true,
        });

        pulseAnimation();

        setTimeout(() => {
            pulseAnimation();
            expandAnimation.start();
            translateYAnimation.start();
        }, 5000);
    }, [scaleValue, translateYValue]);

    return (
        <LayoutPublic justifyContent="center" alignItems="center">
            <Animated.Image
                style={{
                    transform: [
                        { scale: scaleValue },
                        { translateY: translateYValue },
                    ],
                    width: 375,
                    height: 135,
                }}
                source={logoRickMortyGreenBlue}
                resizeMode="cover"
            />
        </LayoutPublic>
    );
};

export default Loading;
