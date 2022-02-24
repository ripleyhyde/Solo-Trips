import { Text, View, TextInput, ImageBackground } from "react-native";
import React from "react";
import styles from "../styles";
import { Form, FormItem } from "react-native-form-component";
import { observer } from "mobx-react";
import { Button } from "native-base";

const TripCreate = () => {
  return (
    // <ImageBackground
    //   source={{
    //     uri: "https://cdn1.epicgames.com/epic/offer/Journey_SmallSize-2580x1450-75345be2b7101291982f1dcfcedaadbd.jpg",
    //   }}
    //   style={styles.backgoundImage}
    // >
    <View>
      <Text style={styles.createTitle}>New Journey</Text>
      <Form>
        <FormItem placeholder="Enter trip name" style={styles.formName} />
        <FormItem
          placeholder="Enter trip descrip"
          style={styles.formDescription}
        />
        <Button style={styles.formImage}>Upload Image</Button>
      </Form>
    </View>
    // </ImageBackground>
  );
};

export default observer(TripCreate);
