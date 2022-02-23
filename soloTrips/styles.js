import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  formName: {
    marginTop: 250,
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
