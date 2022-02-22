import { View } from "react-native";
import React from "react";
import TripItem from "./TripItem";
import trips from "../DummyData";

const TripList = () => {
  const tripList = trips.map((trip) => <TripItem trip={trip} key={trips.id} />);

  return <View>{tripList}</View>;
};

export default TripList;
