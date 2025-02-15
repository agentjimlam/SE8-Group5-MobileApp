import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { stylesDefault } from "../styles/stylesDefault";

export default function HomeScreen({ navigation, route }) {

  return (
    <View style={stylesDefault.container}>
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
