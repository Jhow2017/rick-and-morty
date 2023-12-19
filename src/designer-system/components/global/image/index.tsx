import React from "react";
import { Image, ImageProps, FlexStyle, ImageStyle } from "react-native";

//@ts-ignore
interface DsImageType extends ImageProps, ImageStyle, FlexStyle {
    width?: number | undefined;
    height?: number | undefined;
}

const DsImage: React.FC<DsImageType> = (props) => {
    return (
        <Image
            objectFit="cover"
            {...props}
            style={[
                props.style,
                {
                    width: props.width || "100%",
                    height: props.height || "100%",
                },
            ]}
        />
    );
};

export default DsImage;
