//components
import LayoutPublic from '@components/layout/public';
import { DsImage } from '@ds/components/global';

// images
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';

const Loading = () => {
    return (
        <LayoutPublic justifyContent="center" alignItems="center">
            <DsImage
                source={logoRickMortyGreenBlue}
                resizeMode="cover"
                width={375}
                height={135}
            />
        </LayoutPublic>
    );
};

export default Loading;
