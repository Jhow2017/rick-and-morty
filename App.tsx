import { StatusBar } from "expo-status-bar";
import Navigation from "src/stacks/navigation";
import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
} from "@expo-google-fonts/inter";

import "react-native-gesture-handler";

//components
import Loading from "@components/loading";

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <>
            <StatusBar style="light" translucent />
            <Navigation />
        </>
    );
}
