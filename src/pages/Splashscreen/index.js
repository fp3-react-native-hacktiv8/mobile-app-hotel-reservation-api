import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View, Image } from "react-native";

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Index");
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="white-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Image
        source={require("../../../assets/logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>ALRA HOTEL</Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "royalblue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "white",
    marginTop: 12,
    fontSize: 25,
  },
});
