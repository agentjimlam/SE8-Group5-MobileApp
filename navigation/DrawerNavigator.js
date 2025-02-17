import { createDrawerNavigator } from "@react-navigation/drawer";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import About from "../screens/About";
import TabNavigator from "./TabNavigator";
import { useState } from "react";

// import components
import { HoroscopeButtons } from "../screens/HoroscopeButtons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tab Navigator"
        component={TabNavigator}
        options={{ title: "Main Screens" }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="pied-piper-alt" size={size} color={color} />
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
