import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import HomeScreen from "../screens/HomeScreen";

// import components
import { HoroscopeButtons } from "../screens/HoroscopeButtons";
// Import by Vincent
import { TicTacToe } from "../screens/TicTacToe";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} // the component that will be shown in Home tab of the bottom TabNavigator
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign name="home" size={size} color={color}></AntDesign>
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Horoscope"
        component={HoroscopeButtons}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      {/* Vincent's Screen */}
      <Tab.Screen
        name="TicTacToe"
        component={TicTacToe}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gamepad" size={size} color={color}/>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabNavigator;
