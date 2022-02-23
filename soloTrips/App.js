import { NativeBaseProvider } from "native-base";
import { View } from "react-native";
// import { ImageBackground } from "react-native";
import TripCreate from "./components/TripCreate";
import TripList from "./components/TripList";
import TripDetail from "./components/TripDetail";
import styles from "./styles";

export default function App() {
  return (
    // <ImageBackground
    //   source={{
    //     uri: "https://cdn1.epicgames.com/epic/offer/Journey_SmallSize-2580x1450-75345be2b7101291982f1dcfcedaadbd.jpg",
    //   }}
    //   style={{ height: "100%", width: "100%", flex: 1 }}
    // >
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <TripList /> */}
        {/* <TripCreate /> */}
        <TripDetail />
      </View>
    </NativeBaseProvider>

    // </ImageBackground>
  );
}
