import { Box, Center, VStack } from "native-base";
import React from "react";
import { Text, Image } from "react-native";
import styles from "../styles";

const TripItem = ({ trip }) => {
  return (
    <Center>
      <VStack>
        <Image style={styles.image} source={{ uri: trip.image }} />
        <Text style={styles.tripTitle}>{trip.title}</Text>
      </VStack>
    </Center>
  );
};

export default TripItem;
