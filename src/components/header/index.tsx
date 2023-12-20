import { Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//components
import { DsFlex } from '@ds/layout';
import DsIcon, { IconsType } from '@ds/components/global/icon';

// // designer-system
import { DsFlexType } from '@ds/layout/flex';
import { DsImage } from '@ds/components/global';

// images
import logoRickMortyGreenBlue from '@images/splash/logo-rick-morty-green-blue.png';

//choose mode
interface HeaderProps extends DsFlexType {
    sizeLogo?: number;
    icon?: IconsType;
    marginTop?: number;
}
const Header: React.FC<HeaderProps> = (props) => {
    const { marginTop, sizeLogo, icon, ...attr } = props;

    const navigation = useNavigation();
    return (
        <DsFlex
            style={[
                attr?.style,
                {
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: Platform.OS === 'ios' ? marginTop ?? 56 : 42,
                },
            ]}
            {...attr}
        >
            {/* <DsIcon
                icon="arrow-left"
                size={24}
                width={32}
                height={32}
                color="#DDDDDD"
                backgroundColor={'#232222'}
                borderRadius={50}
                justifyContent="center"
                alignItems="center"
                position="absolute"
                left={0}
                onPress={() => navigation.goBack()}
            /> */}
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
