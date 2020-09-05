import React from "react";
import { Text } from "react-native";
import styles from "./Styles";

export default function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}
