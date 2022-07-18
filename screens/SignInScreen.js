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

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("signed in");
  };

  const onAppleSignInPressed = () => {
    console.warn("Apple Sign in");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUpScreen");
  };

  const onForgotPasswordPressed = () => {
    console.log("forgot password");
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
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.title}>To Account!</Text>
          </View>

          <View style={{ marginVertical: 30, paddingBottom: 30 }}>
            <Text style={styles.subtitle}>
              Sign in with username or email and
            </Text>
            <Text style={styles.subtitle}>password to use you account</Text>
          </View>
          <CustomInput
            placeholder="Username or Email"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <CustomButton text="Sign in" onPress={onSignInPressed} />

          <CustomButton
            text="Sign in with Apple id"
            onPress={onAppleSignInPressed}
            type="SECONDARY"
          />
          <CustomButton
            text="Forgot Password"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <CustomButton
            text="Don't have an account? Sign up"
            onPress={onSignUpPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
