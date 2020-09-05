import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default styles;
