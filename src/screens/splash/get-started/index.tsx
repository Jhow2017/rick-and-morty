import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//@Ds
import { DsBox, DsFlex } from '@ds/layout';
import { DsImage, DsButton } from '@ds/components/global';
import { DsText } from '@ds/components/typography';

//images
import SpaceBgGetstart from '@images/splash/space-bg-getstart.png';
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';
import Spacecraft from '@images/splash/spacecraft.png';

const GetStartedScreen = () => {
    const navigation = useNavigation();

    const OpenHandleGetstarted = () => {
        navigation.navigate('ChooseMode');
    };
    return (
        <DsBox flex={1} alignItems="center" backgroundColor={'#0d0c0c'}>
            <DsImage
                position="absolute"
                source={SpaceBgGetstart}
                resizeMode="cover"
            />

            <DsImage
                source={logoRickMortyGreenBlue}
                marginTop={Platform.OS === 'ios' ? 65 : 42}
                resizeMode="cover"
                width={375}
                height={135}
            />

            <DsFlex
                top={Platform.OS === 'ios' ? 300 : 200}
                position="relative"
                alignItems="center"
                justifyContent="space-between"
            >
                <DsImage
                    source={Spacecraft}
                    resizeMode="cover"
                    width={351}
                    height={192}
                    position="absolute"
                    marginTop={Platform.OS === 'ios' ? -180 : -140}
                />
                <DsButton
                    variant="secondary"
                    size="large"
                    marginTop={Platform.OS === 'ios' ? 135 : 180}
                    fontWeight="700"
                    lineHeight={22}
                    textTransform="capitalize"
                    onPress={OpenHandleGetstarted}
                >
                    Get started
                </DsButton>
            </DsFlex>
        </DsBox>
    );
};

export default GetStartedScreen;
