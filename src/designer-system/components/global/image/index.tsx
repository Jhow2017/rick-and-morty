import React from 'react';
import { Image, ImageProps, FlexStyle, ImageStyle } from 'react-native';

type ImageStyleWithoutConflicts = Omit<
    ImageStyle,
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'overflow'
>;

interface DsImageType
    extends Omit<ImageProps, 'height'>,
        ImageStyleWithoutConflicts,
        FlexStyle {
    width?: any;
    height?: any;
}

const DsImage: React.FC<DsImageType> = (props) => {
    const { width, height, style, ...rest } = props;

    return (
        <Image
            objectFit="cover"
            {...rest}
            style={[
                style,
                {
                    width: width || '100%',
                    height: height || '100%',
                },
            ]}
        />
    );
};

export default DsImage;
