import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

//@Ds
import { DsBox } from "@ds/layout";
import { DsBoxType } from "@ds/layout/box";

interface DsDividerProps extends DsBoxType {
    gradient?: LinearGradientProps;
    borderColor?: string;
    borderWidth?: number;
    orientation?: "horizontal" | "vertical";
}

const DsDivider: React.FC<DsDividerProps> = (props) => {
    const { gradient, borderColor, borderWidth, orientation, ...attr } = props;

    if (gradient) {
        const {
            colors = ["#252525", "#5B5B5B"],
            start = [0, 0],
            end = [1, 0],
            style,
        } = gradient;

        return (
            <DsBox width={146} height={1} {...attr}>
                <LinearGradient
                    {...(attr as LinearGradientProps)}
                    colors={colors}
                    start={start}
                    end={end}
                    style={[style || { flex: 1 }]}
                />
            </DsBox>
        );
    }

    const dividerStyle = {
        borderColor: borderColor || "#fff",
        borderWidth: borderWidth || 0.3,
    };

    return (
        <DsBox
            {...attr}
            style={[
                {
                    width: attr?.width || "100%",
                    height: attr?.height || "100%",
                    borderStyle: "solid",
                },
                dividerStyle,
                attr.style,
            ]}
        />
    );
};

export default DsDivider;
