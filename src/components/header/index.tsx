import { View } from 'react-native';

//components
import { DsFlex } from '@ds/layout';

// designer system
import { DsFlexType } from '@ds/layout/flex';
import { DsImage } from '@ds/components/global';

// images
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';

//choose mode
interface HeaderProps extends DsFlexType {
    sizeLogo?: number;

    marginTop?: number;
}
const Header: React.FC<HeaderProps> = (props) => {
    const { marginTop, sizeLogo, ...attr } = props;

    return (
        <DsFlex
            style={[
                attr?.style,
                {
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: marginTop ?? 24,
                },
            ]}
            {...attr}
        >
            <DsImage
                source={logoRickMortyGreenBlue}
                resizeMode="cover"
                width={375}
                height={135}
            />

            <View />
        </DsFlex>
    );
};

export default Header;
