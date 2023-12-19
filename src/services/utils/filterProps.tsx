import { TextStyle } from "react-native";

export const filterProps = (attr: any): TextStyle => {
    const allowedProps: (keyof TextStyle)[] = [
        "color",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "textAlign",
        "textDecorationLine",
        "textDecorationStyle",
        "textDecorationColor",
        "textShadowColor",
        "textShadowOffset",
        "textShadowRadius",
        "textTransform",
        "testID",
    ];

    const filteredProps: TextStyle = {};

    for (const prop of allowedProps) {
        if (attr && attr[prop] !== undefined) {
            filteredProps[prop] = attr[prop];
        }
    }

    return filteredProps;
};
