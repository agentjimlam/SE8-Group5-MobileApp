import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { stylesDefault } from "../styles/stylesDefault";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation, route }) {

  return (
    <View style={stylesDefault.container}>
      <StatusBar 
        style="dark" 
        // backgroundColor="#61dafb" 
      />
      <Text>This is the Home Screen</Text>
      <TouchableOpacity
        style={stylesDefault.launchButton}
        onPress={()=>{
            navigation.navigate("Drawer Navigator", {
                screen: "About",
            });
        }}
      >
        <Text style={stylesDefault.launchButtonText}>Navigate to About</Text>
      </TouchableOpacity>
    </View>
  );
}
