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
import CountryPicker from "rn-country-dropdown-picker";
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
    navigation.navigate("VerifyScreen");
  };
  function handleSelection(e) {
    console.log(e);
  }

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
          <View style={styles.pickercontainer}>
            <CountryPicker
              InputFieldStyle={styles.ContainerStyle}
              DropdownContainerStyle={styles.myDropdownContainerStyle}
              DropdownRowStyle={styles.myDropdownRowStyle}
              Placeholder="choose country ..."
              DropdownCountryTextStyle={styles.myDropdownCountryTextStyle}
              countryNameStyle={styles.mycountryNameStyle}
              flagSize={32}
              selectedItem={handleSelection}
            />
          </View>
          <View style={{ marginVertical: 50 }}>
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
  pickercontainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,

    padding: 20,
    marginVertical: 10,
    height: "auto",
    shadowColor: "#52006A",

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 20,
  },
});
