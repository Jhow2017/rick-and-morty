import React from "react";
import { View } from "react-native";
import DsIcon, { IconsType } from "@ds/components/global/icon";

type BottomMenuItemProps = {
    iconName: IconsType;
    isCurrent?: boolean;
};
const BottomMenuItem = ({ iconName, isCurrent }: BottomMenuItemProps) => {
    return (
        <View
            style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <DsIcon
                icon={iconName.toLowerCase() as IconsType}
                size={26}
                color={isCurrent ? "#42C83C" : "#737373"}
            />
        </View>
    );
};

export default BottomMenuItem;
