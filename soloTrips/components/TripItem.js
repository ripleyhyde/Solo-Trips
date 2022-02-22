import React from "react";
import { StyleSheet, Text, Image } from "react-native";

const TripItem = ({ trip }) => {
  return (
    <>
      <Image source={{ uri: trip.image }} style={styles.image} />
      <Text>{trip.title}</Text>
    </>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});
