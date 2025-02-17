import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Device from "expo-device";
import { useNavigation } from "@react-navigation/native";

const DeviceInfoScreen = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const navigation = useNavigation(); 
  useEffect(() => {
    setDeviceInfo({
      brand: Device.brand || "Unknown",
      modelName: Device.modelName || "Unknown",
      osName: Device.osName || "Unknown",
      osVersion: Device.osVersion || "Unknown",
      manufacturer: Device.manufacturer || "Unknown",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Device Information</Text>
      <Text>🔹 Brand: {deviceInfo.brand}</Text>
      <Text>📱 Model: {deviceInfo.modelName}</Text>
      <Text>🖥 OS: {deviceInfo.osName}</Text>
      <Text>🔢 OS Version: {deviceInfo.osVersion}</Text>
      <Text>🏭 Manufacturer: {deviceInfo.manufacturer}</Text>

      <Button title="Check Battery Level 🔋" onPress={() => navigation.navigate("Battery")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default DeviceInfoScreen;
