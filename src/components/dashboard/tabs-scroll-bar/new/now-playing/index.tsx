//@Ds
import { DsBox } from "@ds/layout";

//components
import Header from "@components/header";
import { DsImage } from "@ds/components/global";

//images
import CoverNowPlaying from "@images/dashboard/now-playing.png";
import LayoutPrivate from "@components/layout/private";

const NowPlaying = () => {
    return (
        <LayoutPrivate paddingHorizontal={0} backgroundColor={"blue"}>
            <DsBox justifyContent="center" alignItems="center">
                <Header marginTop={30} sizeLogo={150} />
                <DsImage
                    backgroundColor={"red"}
                    source={CoverNowPlaying}
                    resizeMode="cover"
                    width={335}
                    height={370}
                />
            </DsBox>
        </LayoutPrivate>
    );
};

export default NowPlaying;
