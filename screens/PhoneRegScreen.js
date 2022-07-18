import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import SafeView from "../components/SafeView";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
const { width, height } = Dimensions.get("window");
const COLORS = {
  primary: "#4f62c0",
  white: "#fff",
  black: "#000",
  secondary: "#0e1839",
};

const PhoneRegScreen = ({ navigation }) => {
  const [country, setCountry] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const onContinuePressed = () => {
    console.warn("continue ");
  };

  return (
    <SafeAreaView style={[SafeView.AndroidSafeArea, styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "stretch",
            padding: 30,
            width: "auto",
          }}
        >
          <View style={{ marginTop: 50 }}>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.title}>Registration</Text>
          </View>

          <View style={{ marginVertical: 30, paddingBottom: 30 }}>
            <Text style={styles.subtitle}>
              please enter your valid phone number, We will
            </Text>
            <Text style={styles.subtitle}>
              send you 4 digit code to verify account
            </Text>
          </View>
          <View>
            <Text>Enter your location</Text>
            <CustomInput
              placeholder="Country"
              value={country}
              setValue={setCountry}
            />
          </View>
          <View>
            <Text>Enter your Phone Number</Text>
            <CustomInput
              placeholder="Phone Number"
              value={phonenumber}
              setValue={setPhoneNumber}
            />
          </View>

          <CustomButton
            text="Continue"
            onPress={onContinuePressed}
            type="CONTINUE"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneRegScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
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
});
