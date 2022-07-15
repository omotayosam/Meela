import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
const COLORS = { primary: "#4f62c0", white: "#fff", black: "#000" };
const CustomInput = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },

  inputContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    height: 50,
  },
  input: {},
});
