import { ImageBackground, Text, View } from "react-native";
import React from "react";
import styles from "../styles";
import tripStore from "./stores/tripStore";

const TripDetail = () => {
  const trip = tripStore.trips.map((trip) => (trip = trip));
  console.log(trip);

  return (
    <ImageBackground
      source={{
        uri: "https://cdn1.epicgames.com/epic/offer/Journey_SmallSize-2580x1450-75345be2b7101291982f1dcfcedaadbd.jpg",
      }}
      style={styles.backgoundImage}
    >
      <Text style={styles.formName}>trip</Text>
    </ImageBackground>
  );
};

export default TripDetail;
