import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer Navigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Stack.Navigator is the highest level Navigation container.
// Stack handles screen transitions; screens that need the back arrow

// Drawer Navigator: Drawer wraps the Tab Navigator -> drawer applies to all tabs
// Recommended: Drawer.Navigator wraps Tab.Navigator so that the drawer applies to all screens.
