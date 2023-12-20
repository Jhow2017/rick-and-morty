import React from 'react';
import {
    TouchableOpacityProps,
    TouchableOpacity,
    Linking,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { DsText } from '@ds/components/typography';
import { filterProps } from 'src/utils/filterProps';

interface DsLinkType extends TouchableOpacityProps, TextStyle, ViewStyle {
    url?: string;
    children: React.ReactNode;
    onPress?: () => void;
}

const DsLink: React.FC<DsLinkType> = (props) => {
    const { url, onPress, children, ...attr } = props;

    const handlePress = () => {
        if (url) {
            Linking.openURL(url);
        } else if (onPress) {
            onPress();
        }
    };
    const textStyles: TextStyle = {
        fontSize: attr.fontSize || 14,
        color: attr.color ?? '#fff',
        top: attr.top ?? 3,
        ...filterProps(attr),
    };

    return (
        <TouchableOpacity
            style={attr as ViewStyle}
            {...attr}
            onPress={handlePress}
        >
            <DsText {...(textStyles as TextStyle)}>{children}</DsText>
        </TouchableOpacity>
    );
};

export default DsLink;
