import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import HomeScreen from "../screens/HomeScreen";
import WalletScreen from "../screens/WalletScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tabs = AnimatedTabBarNavigator();
const TabBar = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#4f62c0",
        inactiveTintColor: "#ffffff",
        height: 90,
      }}
      appearance={{
        tabBarBackground: "#4f62c0",
        activeTabBackgrounds: "#ffffff",
        dotSize: "small",
        dotCornerRadius: 10,
        topPadding: 10,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/Home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4f62c0" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/settings.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4f62c0" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/Wallet.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4f62c0" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/User.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4f62c0" : "#ffffff",
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
