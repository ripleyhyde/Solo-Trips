import { ImageBackground, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "../styles";
import tripStore from "./stores/tripStore";
import { Image, Input } from "native-base";

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
      <View style={styles.container}>
        <Text style={styles.detailsTitle}>Norway</Text>
        <Image
          style={styles.detailsImage}
          source={{
            uri: "https://christmas.365greetings.com/wp-content/uploads/2015/08/Tromso-Norway.jpg",
          }}
        />
        <TextInput
          style={styles.detailsDescription}
          multiline={true}
          maxLength={100}
        ></TextInput>
      </View>
    </ImageBackground>
  );
};

export default TripDetail;
