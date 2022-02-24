import { NativeBaseProvider } from "native-base";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import TripCreate from "./components/TripCreate";
import TripList from "./components/TripList";
import TripDetail from "./components/TripDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn1.epicgames.com/epic/offer/Journey_SmallSize-2580x1450-75345be2b7101291982f1dcfcedaadbd.jpg",
      }}
      style={{ height: "100%", width: "100%", flex: 1 }}
    >
      <NavigationContainer>
        <NativeBaseProvider>
          <View>
            <Navigator initialRouteName="Description">
              <Screen name="Journeys" component={TripList} />
              <Screen name="New Journey" component={TripCreate} />
              <Screen name="Description" component={TripDetail} />
            </Navigator>

            {/* <TripList /> */}
            {/* <TripCreate /> */}
            {/* <TripDetail /> */}
          </View>
        </NativeBaseProvider>
      </NavigationContainer>
    </ImageBackground>
  );
}
