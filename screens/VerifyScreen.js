import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";

import React, { useState } from "react";
import SafeView from "../components/SafeView";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";

const COLORS = {
  primary: "#4f62c0",
  white: "#fff",
  black: "#000",
  secondary: "#0e1839",
};

const VerifyScreen = ({ navigation }) => {
  const onContinuePressed = () => {
    navigation.navigate("TabBar");
  };
  return (
    <SafeAreaView style={SafeView.AndroidSafeArea}>
      <View
        style={{
          alignItems: "stretch",
          padding: 30,
          width: "auto",
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={styles.title}>Verify</Text>
          <Text style={styles.title}>Account!</Text>
        </View>

        <View style={{ marginVertical: 30, paddingBottom: 30 }}>
          <Text style={styles.subtitle}>
            please enter your valid phone number, We will
          </Text>
          <Text style={styles.subtitle}>
            send you 4 digit code to verify account
          </Text>
        </View>
        <View style={styles.otpWrapper}>
          <View style={styles.otpButton}>
            <TextInput style={{ fontSize: 35, fontWeight: "bold" }} />
          </View>
          <View style={styles.otpButton}>
            <TextInput style={{ fontSize: 35, fontWeight: "bold" }} />
          </View>
          <View style={styles.otpButton}>
            <TextInput style={{ fontSize: 35, fontWeight: "bold" }} />
          </View>
          <View style={styles.otpButton}>
            <TextInput style={{ fontSize: 35, fontWeight: "bold" }} />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 20 }}>
            {" "}
            this session will end in 60 seconds
          </Text>
          <Text style={{ fontSize: 20 }}>
            {" "}
            Didn't get code?{" "}
            <Text style={{ color: "blue", fontSize: 20 }}>Resend Code</Text>
          </Text>
        </View>

        <CustomButton
          text="Continue"
          onPress={onContinuePressed}
          type="CONTINUE"
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: "space-evenly",
    backgroundColor: COLORS.white,
  },
  text: {
    backgroundColor: " #f9f9f9",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    height: 55,
    width: "15%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  subtitle: {
    color: COLORS.black,
    fontSize: 20,
    marginTop: 10,
    lineHeight: 23,
  },
  otpWrapper: {
    flexDirection: "row",
    marginVertical: 10,
  },

  otpButton: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
});
