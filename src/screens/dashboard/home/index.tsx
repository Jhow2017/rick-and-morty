import { useState } from 'react';
import { ScrollView, View } from 'react-native';

//@Ds
import { DsBox } from '@ds/layout';
import { DsText } from '@ds/components/typography';

//components
import Header from '@components/header';
import LayoutPublic from '@components/layout/public';
import DsScrollTab from '@components/shared/tab-scroll/nidex';
import HomeListCharacters from '@components/dashboard/tabs-scroll-bar/new';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <ScrollView
            scrollEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <LayoutPublic paddingHorizontal={0} backgroundColor={'#0F3A40'}>
                <Header sizeLogo={120} paddingHorizontal={10} />

                <DsBox marginTop={16} flex={1} width={'100%'}>
                    <DsScrollTab
                        tabs={['Personagens', 'Novo']}
                        onTabChange={setActiveTab}
                        contentContainerStyle={{
                            paddingHorizontal: 24,
                        }}
                    >
                        <DsBox marginTop={24}>
                            {activeTab === 0 && <HomeListCharacters />}
                            {activeTab === 1 && (
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <DsText
                                        color="red"
                                        fontFamily="Inter_700Bold"
                                        fontSize={19}
                                        textTransform="capitalize"
                                    >
                                        Alguma coisa aqu
                                    </DsText>
                                </View>
                            )}
                        </DsBox>
                    </DsScrollTab>
                </DsBox>
            </LayoutPublic>
        </ScrollView>
    );
};

export default HomeScreen;
