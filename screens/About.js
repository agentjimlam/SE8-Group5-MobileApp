import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// This is the "About" screen in the Drawer.Navigator
export default function About() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>About</Text>
      <Text style={[styles.text]}>
      This app is a rojak of a bunch of different components/features
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  text: {
    margin: 15,
    fontSize: 20,
    lineHeight: 25,
  },
});