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

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [emailad, setEmailad] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordRepeat] = useState("");

  const onSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  const onAppleSignUpPressed = () => {
    console.warn("Apple Sign in");
  };

  const onSignUpPressed = () => {
    navigation.navigate("PhoneRegScreen");
  };

  return (
    <SafeAreaView style={[SafeView.AndroidSafeArea, styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            padding: 30,
            width: "auto",
          }}
        >
          <View style={{ marginTop: 40 }}>
            <Text style={styles.title}>Welcome</Text>
          </View>

          <View style={{ marginVertical: 20, paddingBottom: 30 }}>
            <Text style={styles.subtitle}>please provide following</Text>
            <Text style={styles.subtitle}>details for new account</Text>
          </View>
          <CustomInput
            placeholder="Full Name"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Email Address"
            value={emailad}
            setValue={setEmailad}
          />
          <CustomInput
            placeholder="Phone Number"
            value={phone}
            setValue={setPhone}
          />
          <CustomInput
            placeholder="password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="repeat password"
            value={passwordrepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />
          <View style={{ alignItems: "flex-start", maxWidth: "70%" }}>
            <Text
              style={{
                color: "gray",
                fontSize: 15,
              }}
            >
              By creating your account you accept our terms and conditions
            </Text>
          </View>
          <CustomButton text="Sign Up my account" onPress={onSignUpPressed} />

          <CustomButton
            text="Sign up with Apple id"
            onPress={onAppleSignUpPressed}
            type="SECONDARY"
          />

          <CustomButton
            text="Already have an account? Sign in"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: COLORS.secondary,
    margin: 10,
  },
  subtitle: {
    color: COLORS.black,
    fontSize: 20,
    marginTop: 10,
    lineHeight: 23,
  },
  checkbox: {
    alignSelf: "center",
  },
});
