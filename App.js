import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Platform,
  View,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.droidContainer}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  droidContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
