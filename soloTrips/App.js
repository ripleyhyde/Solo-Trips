import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TripList from "./components/TripList";
import { ImageBackground } from "react-native";
import TripCreate from "./components/TripCreate";

export default function App() {
  return (
    // <ImageBackground
    //   source={{
    //     uri: "https://cdn1.epicgames.com/epic/offer/Journey_SmallSize-2580x1450-75345be2b7101291982f1dcfcedaadbd.jpg",
    //   }}
    //   style={{ height: 50, width: 50 }}
    // >
    <View style={styles.container}>
      {/* <TripList /> */}
      <TripCreate />
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
