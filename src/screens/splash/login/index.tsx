import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//components
import { DsText } from '@ds/components/typography';
import { DsBox, DsFlex } from '@ds/layout';
import DsIcon from '@ds/components/global/icon';
import DsButton from '@ds/components/global/button';
import DsImage from '@ds/components/global/image';

//images
import Union from '@images/union-00.png';
import Union1 from '@images/union-01.png';
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';

//choose mode
const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <DsBox
            flex={1}
            alignItems="center"
            backgroundColor={'#0F3A40'}
            paddingHorizontal={42}
        >
            <DsImage
                zIndex={-1}
                position="absolute"
                source={Union}
                width={167}
                height={129}
                right={0}
                top={0}
                resizeMode={'contain'}
            />
            <DsBox
                justifyContent="flex-start"
                alignItems="flex-start"
                width={'100%'}
            >
                <DsIcon
                    icon="arrow-left"
                    size={24}
                    width={32}
                    height={32}
                    color="#DDDDDD"
                    backgroundColor={'#232222'}
                    borderRadius={50}
                    justifyContent="center"
                    alignItems="center"
                    marginTop={Platform.OS === 'ios' ? 56 : 42}
                    onPress={() => navigation.goBack()}
                />
            </DsBox>
            <DsBox marginTop={42}>
                <DsImage
                    source={logoRickMortyGreenBlue}
                    resizeMode="cover"
                    width={375}
                    height={135}
                />

                <DsFlex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    paddingHorizontal={16}
                >
                    <DsText
                        color="#F2F2F2"
                        fontSize={20}
                        lineHeight={35}
                        fontWeight="700"
                        textTransform="capitalize"
                        marginTop={32}
                    >
                        What is Lorem Ipsum?
                    </DsText>
                    <DsText
                        color="#A0A0A0"
                        fontSize={17}
                        lineHeight={25}
                        fontWeight="400"
                        textAlign="center"
                        marginTop={32}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been.
                    </DsText>
                    <DsFlex marginTop={100} gap={70} alignItems="center">
                        <DsButton
                            variant="secondary"
                            size="medium"
                            width={180}
                            height={73}
                            paddingHorizontal={36}
                            fontWeight="700"
                            lineHeight={22}
                            borderRadius={30}
                            onPress={() => navigation.navigate('Register')}
                        >
                            Cadastro
                        </DsButton>
                        <DsButton
                            variant="default"
                            size="medium"
                            width={'auto'}
                            fontWeight="700"
                            lineHeight={22}
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            Entrar
                        </DsButton>
                    </DsFlex>
                </DsFlex>
            </DsBox>

            <DsImage
                zIndex={-1}
                position="absolute"
                source={Union1}
                width={157}
                height={301}
                right={0}
                bottom={0}
                resizeMode={'contain'}
            />
        </DsBox>
    );
};

export default LoginScreen;
