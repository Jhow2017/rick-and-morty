import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

//@Ds
import { DsBox, DsFlex } from "@ds/layout";
import DsIcon from "@ds/components/global/icon";
import DsImage from "@ds/components/global/image";
import { DsText } from "@ds/components/typography";
import DsButton from "@ds/components/global/button";

//images
import BillieEilishGlasses from "@images/splash/billie-eilish-glasses.png";

const GetStartedScreen = () => {
    const navigation = useNavigation();

    const OpenHandleGetstarted = () => {
        navigation.navigate("ChooseMode");
    };
    return (
        <DsBox flex={1} alignItems="center" backgroundColor={"#0d0c0c"}>
            <DsImage position="absolute" source={BillieEilishGlasses} />
            <DsIcon
                icon="spotify"
                marginTop={Platform.OS === "ios" ? 65 : 42}
                size={196}
                color="#62CD5D"
            />

            <DsFlex
                top={Platform.OS === "ios" ? 300 : 200}
                alignItems="center"
                flexDirection="column"
                paddingHorizontal={53}
            >
                <DsText
                    color="#DADADA"
                    fontSize={25}
                    lineHeight={33}
                    fontWeight="700"
                >
                    Enjoy listening to music
                </DsText>
                <DsText
                    color="#DADADA"
                    fontSize={17}
                    lineHeight={22}
                    fontWeight="400"
                    textAlign="center"
                    marginTop={21}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis enim purus sed phasellus. Cursus ornare id
                    scelerisque aliquam.
                </DsText>
                <DsButton
                    variant="secondary"
                    size="large"
                    marginTop={37}
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
