import React, { useState } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

import { DsBox, DsFlex } from '@ds/layout';
import { DsButton } from '@ds/components/global';

interface DsScrollTabProps {
    tabs: string[];
    onTabChange: (index: number) => void;
    children: React.ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle> | undefined;
}

const DsScrollTab: React.FC<DsScrollTabProps> = ({
    tabs,
    onTabChange,
    children,
    ...props
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPress = (index: number) => {
        setActiveTab(index);
        onTabChange(index);
    };

    return (
        <DsBox flex={0.1}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    props.contentContainerStyle,
                    {
                        gap: 47,
                    },
                ]}
            >
                {tabs.map((tab, index) => (
                    <DsFlex
                        flexDirection="column"
                        alignItems="center"
                        key={index}
                    >
                        <DsButton
                            variant="default"
                            size="large"
                            onPress={() => handleTabPress(index)}
                            width={'auto'}
                            height={'auto'}
                            padding={0}
                            fontSize={20}
                            fontWeight="600"
                            color={activeTab === index ? '#DBDBDB' : '#616161'}
                        >
                            {tab}
                        </DsButton>
                        <DsBox
                            width={'100%'}
                            borderBottomWidth={3}
                            borderColor={
                                activeTab === index ? '#42C83C' : 'transparent'
                            }
                            borderBottomRightRadius={20}
                            borderBottomLeftRadius={20}
                        />
                    </DsFlex>
                ))}
            </ScrollView>
            <DsBox flex={1} height={'100%'}>
                {children && React.Children.toArray(children)}
            </DsBox>
        </DsBox>
    );
};

export default DsScrollTab;
