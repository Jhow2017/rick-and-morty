import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// designer system
import { DsBox, DsFlex } from '@ds/layout';
import { DsIcon, DsImage, DsButton } from '@ds/components/global';
import { DsText } from '@ds/components/typography';

//images
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';

const ChooseModeScreen = () => {
    const navigation = useNavigation();
    return (
        <DsBox flex={1} alignItems="center" backgroundColor={'#0F3A40'}>
            <DsImage
                source={logoRickMortyGreenBlue}
                resizeMode="cover"
                width={375}
                height={135}
                marginTop={Platform.OS === 'ios' ? 65 : 40}
            />

            <DsFlex
                top={Platform.OS === 'ios' ? 150 : 100}
                alignItems="center"
                paddingHorizontal={53}
                flexDirection="column"
            >
                <DsText color="#DADADA" fontSize={22} fontWeight="700">
                    Escolha o modo
                </DsText>
                <DsFlex gap={90} marginTop={32}>
                    <DsIcon
                        icon="moon"
                        size={30}
                        height={73}
                        width={73}
                        backgroundColor={'#3f463c'}
                        borderRadius={50}
                        justifyContent="center"
                        alignItems="center"
                        onPress={() => console.log('Clicou na Lua')}
                    >
                        Dark mode
                    </DsIcon>
                    <DsIcon
                        icon="sun"
                        size={30}
                        height={73}
                        width={73}
                        backgroundColor={'#31383b'}
                        borderRadius={50}
                        justifyContent="center"
                        alignItems="center"
                        onPress={() => console.log('Clicou no Sol')}
                    >
                        Light mode
                    </DsIcon>
                </DsFlex>
                <DsButton
                    variant="secondary"
                    size="large"
                    marginTop={37}
                    fontWeight="600"
                    onPress={() =>
                        navigation.navigate('LogonStack', {
                            screen: 'Login',
                        })
                    }
                >
                    Continuar
                </DsButton>
            </DsFlex>
        </DsBox>
    );
};

export default ChooseModeScreen;
