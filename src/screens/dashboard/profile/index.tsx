import { ScrollView } from 'react-native';

//@Ds
import { DsFlex } from '@ds/layout';
import { DsText } from '@ds/components/typography';

//components
import Header from 'src/components/header';
import LayoutPublic from '@components/layout/public';

const ProfileScreen = () => {
    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic paddingBottom={74}>
                <Header marginTop={30} />
                <DsFlex marginTop={80} flexDirection="column">
                    <DsText
                        color="#F2F2F2"
                        fontSize={20}
                        lineHeight={35}
                        fontWeight="700"
                        textTransform="capitalize"
                    >
                        Profile
                    </DsText>
                </DsFlex>
            </LayoutPublic>
        </ScrollView>
    );
};

export default ProfileScreen;
