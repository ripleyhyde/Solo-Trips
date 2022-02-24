import { ImageBackground, View, Text } from "react-native";
import React from "react";
import TripItem from "./TripItem";
import styles from "../styles";
import { VStack } from "native-base";
import { observer } from "mobx-react";
import tripStore from "./stores/tripStore";

const TripList = () => {
  // const tripList = trips.map((trip) => <TripItem key={trips.id} trip={trip} />);
  const tripList = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} />
  ));

  return (
    // <ImageBackground
    //   source={{
    //     uri: "https://cdn1.epicgames.com/epic/offer/Journey_SmallSize-2580x1450-75345be2b7101291982f1dcfcedaadbd.jpg",
    //   }}
    //   style={styles.backgoundImage}
    // >
    <VStack style={styles.list}>{tripList}</VStack>
    // </ImageBackground>
  );
};

export default observer(TripList);
