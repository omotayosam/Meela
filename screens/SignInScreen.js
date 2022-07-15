import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";

import React, { useState } from "react";
import SafeView from "../components/SafeView";
import CustomInput from "../components/CustomInput";
const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#4f62c0", white: "#fff", black: "#000" };

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={[SafeView.AndroidSafeArea, styles.container]}>
      <View style={{ marginLeft: 20 }}>
        <View>
          <Text style={styles.welcome}>Sign In To Account!</Text>
        </View>

        <View>
          <Text style={styles.instruction}>
            Sign in with username or email and password to use you account
          </Text>
        </View>
        <CustomInput placeholder="Username or Email" />
        <CustomInput placeholder="Password" />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  welcome: {
    fontSize: 35,
    maxWidth: 200,
    fontWeight: "bold",
    padding: 20,
  },
  instruction: {
    color: COLORS.black,
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 23,
  },
});
