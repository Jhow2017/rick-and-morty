import { useEffect, useRef } from 'react';
import { Animated, Easing, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//@Ds
import { DsBox, DsFlex } from '@ds/layout';
import { DsImage, DsButton } from '@ds/components/global';

//images
import SpaceBgGetstart from '@images/splash/space-bg-getstart.png';
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';
import Spacecraft from '@images/splash/spacecraft.png';

const GetStartedScreen = () => {
    const navigation = useNavigation();
    const scaleValue = useRef(new Animated.Value(1)).current;

    const OpenHandleGetstarted = () => {
        navigation.navigate('ChooseMode');
    };

    const pulse = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 1500,
                easing: Easing.bezier(0.4, 0, 0.2, 1),
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 1500,
                easing: Easing.bezier(0.4, 0, 0.2, 1),
                useNativeDriver: true,
            }),
        ]).start(() => pulse());
    };

    useEffect(() => {
        pulse();
    }, []);
    return (
        <DsBox flex={1} alignItems="center" backgroundColor={'#0d0c0c'}>
            <DsImage position="absolute" source={SpaceBgGetstart} />

            <DsImage
                source={logoRickMortyGreenBlue}
                marginTop={Platform.OS === 'ios' ? 65 : 42}
                resizeMode="cover"
                width={375}
                height={135}
            />

            <DsFlex
                top={Platform.OS === 'ios' ? 300 : 200}
                alignItems="center"
                flexDirection="column"
                paddingHorizontal={53}
                position="relative"
            >
                <Animated.Image
                    style={{
                        transform: [{ scale: scaleValue }],

                        width: 351,
                        height: 192,
                        position: 'absolute',
                        marginTop: Platform.OS === 'ios' ? -180 : -140,
                    }}
                    source={Spacecraft}
                    resizeMode="cover"
                />

                <DsButton
                    variant="secondary"
                    size="large"
                    marginTop={Platform.OS === 'ios' ? 135 : 150}
                    fontWeight="700"
                    lineHeight={22}
                    textTransform="capitalize"
                    onPress={OpenHandleGetstarted}
                >
                    Começar
                </DsButton>
            </DsFlex>
        </DsBox>
    );
};

export default GetStartedScreen;
