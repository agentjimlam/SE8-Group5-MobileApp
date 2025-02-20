import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Battery from "expo-battery";

const BatteryScreen = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(Math.round(level * 100)); // 转换成百分比
    };

    getBatteryLevel();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battery Status</Text>
      <Text style={styles.batteryText}>
        Battery Level: {batteryLevel !== null ? `${batteryLevel}%` : "Loading..."}
      </Text>
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
  batteryText: {
    fontSize: 18,
    color: "green",
  },
});

export default BatteryScreen;
