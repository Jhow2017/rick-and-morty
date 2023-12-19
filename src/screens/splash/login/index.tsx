import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

//components
import { DsText } from "@ds/components/typography";
import { DsBox, DsFlex } from "@ds/layout";
import DsIcon from "@ds/components/global/icon";
import DsButton from "@ds/components/global/button";
import DsImage from "@ds/components/global/image";

//images
import Union from "@images/union-00.png";
import Bille3 from "@images/splash/billie-03.png";
import Union1 from "@images/union-01.png";

//choose mode
const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <DsBox
            flex={1}
            alignItems="center"
            backgroundColor={"#1C1B1B"}
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
                resizeMode={"contain"}
            />
            <DsBox
                justifyContent="flex-start"
                alignItems="flex-start"
                width={"100%"}
            >
                <DsIcon
                    icon="arrow-left"
                    size={24}
                    width={32}
                    height={32}
                    color="#DDDDDD"
                    backgroundColor={"#232222"}
                    borderRadius={50}
                    justifyContent="center"
                    alignItems="center"
                    marginTop={Platform.OS === "ios" ? 56 : 42}
                    onPress={() => navigation.goBack()}
                />
            </DsBox>
            <DsBox marginTop={112}>
                <DsIcon
                    icon="spotify"
                    size={235}
                    color="#62CD5D"
                    justifyContent="center"
                    alignItems="center"
                />
                <DsFlex
                    marginTop={45}
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <DsText
                        color="#F2F2F2"
                        fontSize={20}
                        lineHeight={35}
                        fontWeight="700"
                        textTransform="capitalize"
                    >
                        Enjoy listening to music
                    </DsText>
                    <DsText
                        color="#A0A0A0"
                        fontSize={17}
                        lineHeight={25}
                        fontWeight="400"
                        textAlign="center"
                        marginTop={21}
                    >
                        Spotify is a proprietary Swedish audio streaming and
                        media services provider
                    </DsText>
                    <DsFlex marginTop={32} gap={88} alignItems="center">
                        <DsButton
                            variant="secondary"
                            size="medium"
                            width={147}
                            height={73}
                            paddingHorizontal={36}
                            fontWeight="700"
                            lineHeight={22}
                            borderRadius={30}
                            onPress={() => navigation.navigate("Register")}
                        >
                            Register
                        </DsButton>
                        <DsButton
                            variant="default"
                            size="medium"
                            width={"auto"}
                            fontWeight="700"
                            lineHeight={22}
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            Sign in
                        </DsButton>
                    </DsFlex>
                </DsFlex>
            </DsBox>

            <DsImage
                zIndex={-1}
                position="absolute"
                source={Bille3}
                width={Platform.OS === "ios" ? 365 : 290}
                height={Platform.OS === "ios" ? 433 : 333}
                left={0}
                bottom={0}
                resizeMode={"contain"}
            />
            <DsImage
                zIndex={-1}
                position="absolute"
                source={Union1}
                width={157}
                height={301}
                right={0}
                bottom={0}
                resizeMode={"contain"}
            />
        </DsBox>
    );
};

export default LoginScreen;
