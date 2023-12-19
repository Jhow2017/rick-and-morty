import React, { ReactNode } from "react";
import { View, ViewProps, ScrollViewProps, ViewStyle } from "react-native";

export interface ComponentMounterType
    extends ViewProps,
        ViewStyle,
        ScrollViewProps {
    children?: ReactNode;
}

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, ...attr } = props;

    return (
        <View {...attr} style={attr.style}>
            {children}
        </View>
    );
};

export default ComponentMounter;
