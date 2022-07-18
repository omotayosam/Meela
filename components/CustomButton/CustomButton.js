import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
const COLORS = { primary: "#4f62c0", white: "#fff", black: "#000" };

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginVertical: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: "4%",
  },

  container_PRIMARY: {
    backgroundColor: COLORS.primary,
  },
  container_SECONDARY: {
    backgroundColor: COLORS.black,
  },
  container_TERTIARY: {},
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
  container_CONTINUE: {
    width: "70%",
    backgroundColor: COLORS.primary,
    alignSelf: "center",

    marginTop: 100,
  },
  text_TERTIARY: {
    color: "gray",
  },
});
