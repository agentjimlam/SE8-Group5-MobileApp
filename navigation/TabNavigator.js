import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; 
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "../screens/HomeScreen";
import DeviceInfoScreen from "../screens/DeviceInfoScreen";
import BatteryScreen from "../screens/BatteryScreen"; 
import { HoroscopeButtons } from "../screens/HoroscopeButtons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DeviceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Device Info" component={DeviceInfoScreen} />
      <Stack.Screen name="Battery" component={BatteryScreen} />
    </Stack.Navigator>
  );
}

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
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Horoscope"
        component={HoroscopeButtons}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Device"
        component={DeviceStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
