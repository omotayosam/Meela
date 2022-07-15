import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []); //[]is to run it once
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && (
              <Stack.Screen
                name="Onboarding Screen"
                component={OnboardingScreen}
              />
            )}

            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    )
  );
}
