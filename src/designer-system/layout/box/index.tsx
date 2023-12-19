import React from "react";
import { FlexStyle } from "react-native";
import ComponentMounter, {
    ComponentMounterType,
} from "@ds/core/component-mounter";

export interface DsBoxType extends FlexStyle, ComponentMounterType {}

const DsBox: React.FC<DsBoxType> = (props) => {
    const { children, ...attr } = props;
    return <ComponentMounter {...attr}>{children}</ComponentMounter>;
};

export default DsBox;
