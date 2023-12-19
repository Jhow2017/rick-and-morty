//@Ds
import { DsBox, DsFlex } from "@ds/layout";
import { DsText } from "@ds/components/typography";
import { DsImage } from "@ds/components/global";

//images
import Union3 from "@images/union-3.png";
import WomanNewAlbum from "@images/dashboard/woman-new-album2.png";

const BannerNewAlbum = () => {
    return (
        <DsBox
            backgroundColor={"#42C83C"}
            borderRadius={30}
            paddingHorizontal={20}
            paddingVertical={15}
            marginTop={38}
            position="relative"
            flexDirection="row"
            alignItems="center"
        >
            <DsFlex flexDirection="column" gap={4}>
                <DsText
                    fontFamily={"Inter_500Medium"}
                    fontSize={14}
                    textTransform={"capitalize"}
                    color={"#FBFBFB"}
                >
                    New album
                </DsText>
                <DsText
                    color="#FBFBFB"
                    fontFamily="Inter_700Bold"
                    fontSize={19}
                    lineHeight={26}
                    width={147}
                    textTransform="capitalize"
                >
                    Happier Than Ever
                </DsText>
                <DsText
                    color="#F2F2F2"
                    fontSize={13}
                    fontFamily="Inter_500Medium"
                    textTransform="capitalize"
                >
                    Billie Eilish
                </DsText>
            </DsFlex>
            <DsImage
                source={WomanNewAlbum}
                resizeMode="cover"
                width={325}
                height={200}
                position="absolute"
                right={5}
                bottom={0.1}
                zIndex={999}
            />
            <DsImage
                source={Union3}
                resizeMode="cover"
                width={105}
                height={107}
                borderTopRightRadius={30}
                position="absolute"
                right={0}
                top={0}
            />
        </DsBox>
    );
};

export default BannerNewAlbum;
