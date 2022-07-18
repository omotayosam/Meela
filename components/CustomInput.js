import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
const COLORS = { primary: "#4f62c0", white: "#fff", black: "#000" };
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    width: "100%",
  },

  inputContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 5,

    padding: 20,
    marginVertical: 10,
    height: 60,
  },
  input: {},
});
