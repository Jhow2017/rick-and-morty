import React from "react";
import { SafeAreaView, Platform } from "react-native";
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import { TabBar } from "../components/dashboard/bottom-tab-bar";
import {
    HomeScreen,
    SearchScreen,
    ProfileScreen,
    FavoriteScreen,
} from "@screens/dashboard";

export const AppTabsStack = () => {
    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                position: "relative",
                backgroundColor: "#1C1B1B",
                marginBottom: Platform.OS === "ios" ? -25 : 0,
            }}
        >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
                tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};
