import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
  },

  image: {
    display: "flex",
    height: 150,
    width: 150,
    borderRadius: 100,
    justifyContent: "space-between",
    marginTop: 15,
  },
  tripTitle: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Futura",
  },

  backgoundImage: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  list: {
    marginTop: 81,
  },

  //TripDetail
  detailsImage: {
    display: "flex",
    height: 350,
    width: 350,
    borderRadius: 200,
    marginBottom: 26,
  },
  detailsDescription: {
    marginBottom: 190,
    maxHeight: 80,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#cd853f40",
    fontSize: 30,
    fontFamily: "Papyrus",
    borderRadius: 20,
  },
  detailsTitle: {
    fontFamily: "Papyrus",
    fontSize: 70,
    textDecorationLine: "underline",
    marginBottom: 20,
    fontSize: 50,
    textAlign: "center",
  },

  //TripCreate
  createTitle: {
    fontFamily: "Papyrus",
    fontSize: 50,
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
  },
  formName: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  formDescription: {
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  formImage: {
    width: 150,
    height: 50,
    marginLeft: 10,
    backgroundColor: "darkgoldenrod",
    borderRadius: 25,
    marginTop: 10,
  },
});

export default styles;
