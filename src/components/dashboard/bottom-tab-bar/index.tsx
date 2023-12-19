import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    Platform,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

//@Ds
import { DsBox } from "@ds/layout";

//components
import BottomMenuItem from "@components/dashboard/bottom-menu-item";
import { IconsType } from "@ds/components/global/icon";

export const TabBar = ({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) => {
    const [translateValue] = useState(new Animated.Value(0));
    const totalWidth = Dimensions.get("window").width;
    const tabWidth = totalWidth / state.routes.length;

    const sliderWidth = tabWidth - 65;

    const animateSlider = (index: number) => {
        Animated.spring(translateValue, {
            toValue: index * tabWidth + (tabWidth - sliderWidth) / 2,
            velocity: 10,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        animateSlider(state.index);
    }, [state.index]);

    return (
        <DsBox
            height={Platform.OS === "ios" ? 90 : 73}
            backgroundColor={"#343434"}
            position={"absolute"}
            bottom={Platform.OS === "ios" ? -7 : 0}
            style={[
                {
                    shadowOffset: {
                        width: 0,
                        height: -1,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 4.0,
                    width: totalWidth,
                    elevation: 10,
                },
            ]}
        >
            <View style={{ flexDirection: "row" }}>
                <Animated.View
                    style={{
                        transform: [{ translateX: translateValue }],
                        width: sliderWidth,
                        left: (tabWidth - sliderWidth) / 65,
                        height: 5,
                        position: "absolute",
                        top: 0,
                        backgroundColor: "#42C83C",
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                />

                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    let nameIcon: IconsType = "home";

                    if (route.name === "Home") {
                        nameIcon = isFocused ? "home-active" : "home";
                    } else if (route.name === "Search") {
                        nameIcon = isFocused ? "search-active" : "search";
                    } else if (route.name === "Favorite") {
                        nameIcon = isFocused
                            ? "favorite-active"
                            : "favorite-outline";
                    } else if (route.name === "Profile") {
                        nameIcon = isFocused
                            ? "profile-active"
                            : "profile-outline";
                    }

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }

                        animateSlider(index);
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: "tabLongPress",
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={{ selected: isFocused }}
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                            key={index}
                        >
                            <BottomMenuItem
                                iconName={nameIcon}
                                isCurrent={isFocused}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </DsBox>
    );
};
