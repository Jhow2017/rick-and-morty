import { useState } from "react";
import { ScrollView } from "react-native";

//@Ds
import { DsBox } from "@ds/layout";

//components
import Header from "@components/header";
import LayoutPublic from "@components/layout/public";
import DsScrollTab from "@components/shared/tab-scroll/nidex";

//images
import NewFlatList from "@components/dashboard/tabs-scroll-bar/new";
import BannerNewAlbum from "@components/dashboard/banner";

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
            <LayoutPublic paddingHorizontal={0}>
                <Header marginTop={30} sizeLogo={150} paddingHorizontal={24} />
                <DsBox paddingHorizontal={24} width={"100%"}>
                    <BannerNewAlbum />
                </DsBox>
                <DsBox marginTop={42} flex={1}>
                    <DsScrollTab
                        tabs={["New", "Video", "Artists", "Podcast"]}
                        onTabChange={setActiveTab}
                        contentContainerStyle={{
                            paddingHorizontal: 24,
                        }}
                    >
                        <DsBox marginTop={32}>
                            {activeTab === 0 && <NewFlatList />}
                            {activeTab === 1 && <NewFlatList />}
                            {activeTab === 2 && <NewFlatList />}
                            {activeTab === 3 && <NewFlatList />}
                        </DsBox>
                    </DsScrollTab>
                </DsBox>
            </LayoutPublic>
        </ScrollView>
    );
};

export default HomeScreen;
