import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TripList from "./components/TripList";

export default function App() {
  return (
    <View style={styles.container}>
      <TripList />
    </View>
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
