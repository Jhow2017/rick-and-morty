import React from "react";
import { FlexStyle } from "react-native";
import ComponentMounter, {
    ComponentMounterType,
} from "@ds/core/component-mounter";

export interface DsFlexType extends FlexStyle, ComponentMounterType {}

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            style={[attr?.style, { flexDirection: "row" }]}
            {...attr}
        >
            {children}
        </ComponentMounter>
    );
};

export default DsFlex;
